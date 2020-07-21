import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import { Modal } from 'semantic-ui-react'
import Content from 'components/Content'
import isMobile from 'hooks/isMobile'

const isVideo = url => {
  const ext = url.split('.').pop()
  return ['mp4'].includes(ext)
}

const WorkCard = ({ data, ...props }) => {
  const player = useRef(null)
  const [played, setPlayed] = useState(false)
  const [preview, setPreview] = useState(false)

  const mouseLeave = () => {
    if (!played) {
      setPreview(false)
      player.current.seekTo(0, 'seconds')
    }
  }

  const playVideo = () => {
    if (!played) {
      setPlayed(true)
      player?.current?.seekTo?.(0, 'seconds')
    }
  }

  return (
    <div {...props} onMouseLeave={mouseLeave} onMouseEnter={() => !played && setPreview(true)} className="work-card relative">
      {isVideo(data?.thumbnail?.url)
        ? <ReactPlayer
          ref={player}
          playing={played || preview}
          width="100%"
          height="100%"
          url={process.env.NEXT_PUBLIC_API_URI + data?.thumbnail?.url}
          controls={played}
          volume={1}
          muted={!played}
        />
        : <>
          {!preview && <img className="absolute left-0 w-full" src={process.env.NEXT_PUBLIC_API_URI + data?.thumbnail?.url} alt={data?.title} style={{ top: '50%', transform: 'translateY(-50%)' }} />}
          <ReactPlayer
            style={{ opacity: played || preview ? 1 : 0 }}
            ref={player}
            playing={played || preview}
            width="100%"
            height="100%"
            url={process.env.NEXT_PUBLIC_API_URI + data?.video?.url}
            controls={played}
            volume={1}
            muted={!played}
          />
        </>}
      <div className="work-card__text" style={{ zIndex: 2 }}>
        <h2 className="text-40px font-medium mb-2" style={{ lineHeight: 1 }}>{data.title}</h2>
        <p className="text-default w-full">{data.short_description}</p>
      </div>
    </div>
  )
}

WorkCard.Detail = ({ data, closeDetail }) => {
  const isMobileDevice = isMobile()

  return (
    <Modal
      open={data !== null}
      onClose={closeDetail}
      size="large"
      style={{ borderRadius: 0 }}
    >
      <div className="p-12">
        <div className="flex justify-between items-center">
          <h1 className="m-0 text-16px md:text-60px w-10/12 md:w-full font-medium">{data.title}</h1>
          <button
            type="button"
            onClick={closeDetail}
            className="self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0"
            style={{ transform: isMobileDevice ? 'scale(0.5)' : 'scale(0.7)' }}
          >
            <span className="hamburger-box">
              <span className={`hamburger-inner`} />
            </span>
          </button>
        </div>
        {data.video && <div className="my-8">
          <ReactPlayer
            playing
            width="100%"
            height="100%"
            controls
            url={process.env.NEXT_PUBLIC_API_URI + data?.video?.url}
          />
        </div>}
        <Content className="work-card__detail text-12px md:text-default text-gray-600" text={data.description} />
      </div>
    </Modal>
  )
}

export default WorkCard
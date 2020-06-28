import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import clsx from 'clsx'

const Video = ({ src }) => {
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
    <div className={clsx([{ 'cursor-pointer': !played }])} onClick={playVideo} onMouseLeave={mouseLeave} onMouseEnter={() => !played && setPreview(true)} style={{ position: 'relative' }}>
      <ReactPlayer
        ref={player}
        playing={played || preview}
        width="100%"
        height="100%"
        url={src}
        controls={played}
        volume={1}
        muted={!played}
      />
    </div>
  )
}

export default Video
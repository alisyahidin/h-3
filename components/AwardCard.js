import clsx from "clsx"
import { Modal } from 'semantic-ui-react'
import Content from 'components/Content'
import isMobile from "hooks/isMobile"
import { useState, useEffect } from "react"

const AwardCard = ({ data, sort, icon, onClick = null }) => {
  const isMobileDevice = isMobile()
  const [height, setHeight] = useState('initial')
  const image = icon ? process.env.NEXT_PUBLIC_API_URI + data?.thumbnail?.url : process.env.NEXT_PUBLIC_API_URI + data?.picture?.url

  useEffect(() => {
    setHeight(icon ? 'initial' : isMobileDevice ? 'initial' : 200)
  }, [isMobileDevice])

  return (
    <div
      className={clsx(["flex items-start justify-center mb-6 cursor-pointer", "order-" + sort, (icon || isMobileDevice) ? 'flex-row' : 'flex-col'])}
      onClick={onClick}
    >
      <div className="mr-4 md:mr-8 flex items-start md:items-center md:mb-6 overflow-hidden" style={{ height, width: isMobileDevice ? 'calc(30vw - 12px)' : 'initial' }}>
        <img className="flex-1" src={image} alt={'Awward' + sort} style={{ objectFit: 'cover', width: "100%", height: isMobileDevice ? 'initial' : 'auto' }} />
      </div>
      <div className="text-white flex-1">
        <h2 className="text-20px md:text-24px mb-2">{data.title}</h2>
        <p className="text-16px" style={{ color: icon ? '#E0E0E0' : '#E0E0E0' }}>{data.short_description}</p>
      </div>
    </div>
  )
}

AwardCard.Detail = ({ data, closeDetail }) => {
  const isMobileDevice = isMobile()

  return (
    <Modal
      open={data !== null}
      onClose={closeDetail}
      size="large"
      style={{ borderRadius: 0 }}
    >
      {!isMobileDevice && <div className="flex flex-col md:flex-row items-center md:items-start p-12">
        <img className="md:mr-12 max-w-full md:w-4/12" height="auto" src={process.env.NEXT_PUBLIC_API_URI + data?.picture?.url} alt={data.title} />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-40px font-medium mb-8">{data.title}</h1>
          <Content text={data.description} style={{ color: '#222222', opacity: 0.7 }} />
        </div>
        <button
          type="button"
          onClick={closeDetail}
          className="self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0"
          style={{ transform: 'scale(0.7)' }}
        >
          <span className="hamburger-box">
            <span className={`hamburger-inner`} />
          </span>
        </button>
      </div>}
      {isMobileDevice && <div className="p-12">
        <div className="flex justify-between items-center">
          <h1 className="text-16px md:text-60px w-10/12 md:w-full font-medium m-0">{data.title}</h1>
          <button
            type="button"
            onClick={closeDetail}
            className="self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0"
            style={{ transform: 'scale(0.5)' }}
          >
            <span className="hamburger-box">
              <span className={`hamburger-inner`} />
            </span>
          </button>
        </div>
        <img className="md:mr-12 max-w-full md:w-4/12 my-8" height="auto" src={process.env.NEXT_PUBLIC_API_URI + data?.picture?.url} alt={data.title} />
        <Content text={data.description} style={{ color: '#222222', opacity: 0.7 }} />
      </div>}
    </Modal>
  )
}

export default AwardCard
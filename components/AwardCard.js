import clsx from "clsx"
import { Modal } from 'semantic-ui-react'
import Content from 'components/Content'

const AwardCard = ({ data, sort, icon, onClick = null }) => {
  const image = icon ? process.env.NEXT_PUBLIC_API_URI + data?.thumbnail?.url : process.env.NEXT_PUBLIC_API_URI + data?.picture?.url
  return (
    <div
      className={clsx(["flex items-start justify-center mb-6", "order-" + sort, icon ? 'flex-col md:flex-row' : 'flex-col', !icon && 'cursor-pointer'])}
      onClick={!icon ? onClick : undefined}
    >
      <div className="md:mr-8 flex items-center mb-6" style={{ minHeight: 150 }}>
        <img src={image} alt={'Awward' + sort} width="200px" />
      </div>
      <div className="text-white flex-1">
        <h2 className="text-24px mb-2">{data.title}</h2>
        <p className="text-16px" style={{ color: icon ? '#FFF' : '#767676' }}>{data.short_description}</p>
      </div>
    </div>
  )
}

AwardCard.Detail = ({ data, closeDetail }) => {
  return (
    <Modal
      open={data !== null}
      onClose={closeDetail}
      size="large"
      style={{ borderRadius: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start p-12">
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
      </div>
    </Modal>
  )
}

export default AwardCard
import { Modal } from 'semantic-ui-react'
import Content from 'components/Content'
import Video from 'components/Video'

const WorkCard = ({ data, ...props }) => {
  return (
    <div {...props} className="work-card relative">
      <img src={ process.env.NEXT_PUBLIC_API_URI + data.thumbnail.url} alt={data.title} />
      <div className="work-card__text" style={{ zIndex: 2 }}>
        <h2 className="text-40px font-medium">{data.title}</h2>
        <p className="text-default w-6/12">{data.short_description}</p>
      </div>
    </div>
  )
}

WorkCard.Detail = ({ data, closeDetail }) => {
  return (
    <Modal
      open={data !== null}
      onClose={closeDetail}
      size="large"
      style={{ borderRadius: 0 }}
    >
      <div className="p-12">
        <div className="flex justify-between">
          <h1 className="text-60px font-medium">{data.title}</h1>
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
        {data.video && <div className="my-8"><Video src={data.video} /></div>}
        <Content className="work-card__detail text-default text-gray-600" text={data.description} />
      </div>
    </Modal>
  )
}

export default WorkCard
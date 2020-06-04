import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Slider = dynamic(() => import('react-slick'), { ssr: false })
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
}

const OurPeople = ({ data }) => {
  const [profile, setProfile] = useState(null)

  return (<>
    <section menu-color="light" style={{ backgroundColor: '#6F6F6F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col text-white">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-52px">OUR PEOPLE</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <Slider {...settings}>
            {data.map((people, index) =>
              <div onClick={() => setProfile(index)} className="cursor-pointer p-5" key={index}>
                <img className="w-full" src={people.avatar} alt={people.name} />
                <h3 className="text-32px">{people.name}</h3>
                <p className="text-16px mb-0">{people.position}</p>
                <p className="text-16px">{people.company}</p>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
    <Modal
      open={profile !== null}
      onClose={() => setProfile(null)}
      size="large"
      style={{ borderRadius: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start p-12">
        <img className="md:mr-12 max-w-full md:w-4/12" height="auto" src={data[profile]?.avatar} alt={data[profile]?.name} />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-40px mb-0">{data[profile]?.name}</h1>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-16px mb-0">{data[profile]?.position}</p>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-16px">{data[profile]?.company}</p>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-default max-w-md">{data[profile]?.description}</p>
        </div>
        <button
          type="button"
          onClick={() => setProfile(null)}
          className="self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0"
          style={{ transform: 'scale(0.7)' }}
        >
          <span className="hamburger-box">
            <span className={`hamburger-inner`} />
          </span>
        </button>
      </div>
    </Modal>
  </>)
}

export default OurPeople
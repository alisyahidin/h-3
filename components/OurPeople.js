import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Modal } from 'semantic-ui-react'
import isMobile from 'hooks/isMobile'

const Slider = dynamic(() => import('react-slick'), { ssr: false })
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
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

const OurPeople = ({ id, data }) => {
  const [profile, setProfile] = useState(null)
  const isMobileDevice = isMobile()

  return (<>
    <section id={id} menu-color="light" style={{ backgroundColor: '#6F6F6F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col text-white">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-32px md:text-52px">OUR PEOPLE</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <Slider {...settings}>
            {data.map((people, index) =>
              <div onClick={() => setProfile(index)} className="cursor-pointer p-5" key={index}>
                <img className="w-full" style={{ objectFit: 'cover', height: window.innerWidth > 767 ? '250' : 'auto' }} src={process.env.NEXT_PUBLIC_API_URI + people?.Photo?.url} alt={people?.Name} />
                <h3 className="text-22px md:text-32px">{people?.Name}</h3>
                <p className="text-14px md:text-16px mb-2" style={{ lineHeight: 1 }}>{people?.Position}</p>
                <p className="text-14px md:text-16px">{people?.Company}</p>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
    {profile !== null && <Modal
      open={profile !== null}
      onClose={() => setProfile(null)}
      size="large"
      style={{ borderRadius: 0 }}
    >
      {!isMobileDevice && <div className="flex flex-col md:flex-row items-center md:items-start p-12">
        <img className="md:mr-12 max-w-full md:w-4/12" height="auto" src={process.env.NEXT_PUBLIC_API_URI + data[profile].Photo.url} alt={data[profile]?.Name} />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-40px mb-0">{data[profile]?.Name}</h1>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-16px mb-0">{data[profile]?.Position}</p>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-16px">{data[profile]?.Company}</p>
          <p style={{ color: '#222222', opacity: 0.7, whiteSpace: 'break-spaces' }} className="text-default">{data[profile]?.Description}</p>
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
      </div>}
      {isMobileDevice &&
        <div className="p-12">
          <div className="flex justify-between items-center">
            <h1 className="text-16px md:text-60px w-8/12 md:w-full font-medium mb-0"><strong>{data[profile]?.Name}</strong></h1>
            <button
              type="button"
              onClick={() => setProfile(null)}
              className="self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0"
              style={{ transform: isMobileDevice ? 'scale(0.5)' : 'scale(0.7)', marginRight: -20 }}
            >
              <span className="hamburger-box">
                <span className={`hamburger-inner`} />
              </span>
            </button>
          </div>
          <img className="md:mr-12 w-full md:w-4/12" height="auto" src={process.env.NEXT_PUBLIC_API_URI + data[profile].Photo.url} alt={data[profile]?.Name} />
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-14px md:text-16px mt-4 mb-0">{data[profile]?.Position}</p>
          <p style={{ color: '#222222', opacity: 0.7 }} className="text-14px md:text-16px">{data[profile]?.Company}</p>
          <p style={{ color: '#222222', opacity: 0.7, whiteSpace: 'pre-line' }} className="text-14px md:text-default max-w-md">{data[profile]?.Description}</p>
        </div>}
    </Modal>}
  </>)
}

export default OurPeople
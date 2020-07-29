import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Content from './Content'

const Slider = dynamic(() => import('react-slick'), { ssr: false })
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  pauseOnHover: false
}

const Quotes = ({ data = [] }) => {
  const [widthInidicator, setWidthInidicator] = useState('0%')

  const updateWidth = index => {
    setWidthInidicator((((index + 1) / data.length) * 100).toString() + '%')
  }

  useEffect(() => {
    updateWidth(0)
  }, [])

  return (
    <section menu-color="light" className="bg-red">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col text-white">
        <div className="flex-1 flex items-center">
          <Slider {...settings} afterChange={updateWidth}>
            {data.map(({quote, author}, index) => (
              <div className="quote" key={index}>
                <Content text={quote} />
                <p className="text-20px md:text-28px normal-case">- {author}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex items-center my-12">
          <span className="text-default">{('0' + 1).slice(-2)}</span>
          <div className="relative md:w-64 w-full mx-6">
            <div className="absolute left-0 top-0 bg-white" style={{ zIndex: 1, height: 2, width: widthInidicator, backgroundColor: 'white', transition: 'width 300ms ease' }}></div>
            <div className="absolute left-0 top-0 opacity-50" style={{ height: 2, width: '100%', backgroundColor: '#D7D4D4' }}></div>
          </div>
          <span className="text-default">{('0' + data.length).slice(-2)}</span>
        </div>
      </div>
    </section>
  )
}

export default Quotes
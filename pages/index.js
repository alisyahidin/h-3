import { useState, useRef, useEffect, Fragment } from 'react'
import Head from 'next/head'
import Logo from 'components/Logo'
import ScrollDown from 'components/ScrollDown'
import Arrow from 'components/Arrow'
import axios from 'lib/axios'

import OurPeople from 'components/landingpage/OurPeople'

const getMenuColor = element => {
  const sections = process.browser
    ? [...document.getElementsByTagName('section')].map(el => ({
      color: el.getAttribute('menu-color'),
      y: el.offsetTop
    }))
    : []

  return sections.filter(section => section.y <= window.pageYOffset + element?.current?.offsetTop).pop()?.color
}

export const getServerSideProps = async ({ req, res }) => {
  const data = await axios.get('/api/collection/page/landingpage')
  return { props: { data: data.entry.data } }
}

export default function Home({ data, HamburgerMenu }) {
  const menu = useRef(null)
  const scrollDown = useRef(null)
  const [menuColor, setMenuColor] = useState(getMenuColor(menu) ?? 'dark')
  const [scrollDownColor, setScrollDownColor] = useState(getMenuColor(scrollDown) ?? 'dark')

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMenuColor(getMenuColor(menu))
      setScrollDownColor(getMenuColor(scrollDown))
    })
    return () => document.addEventListener('scroll', () => {
      setMenuColor(getMenuColor(menu))
      setScrollDownColor(getMenuColor(scrollDown))
    })
  }, [])

  return (<>
    <Head>
      <title>Hakuhodo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Logo />
    <HamburgerMenu
      ref={menu}
      color={menuColor}
    />
    <ScrollDown
      ref={scrollDown}
      color={scrollDownColor}
    />

    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex items-center">
          <img src="/logo-text.png" alt="Hakuhodo" />
        </div>
        <div className="flex flex-col items-center">
          <p className="cursor-pointer text-14px">HERE WE ARE</p>
          <svg className="cursor-pointer" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.64645 29.3536C3.84171 29.5488 4.15829 29.5488 4.35355 29.3536L7.53553 26.1716C7.73079 25.9763 7.73079 25.6597 7.53553 25.4645C7.34027 25.2692 7.02369 25.2692 6.82843 25.4645L4 28.2929L1.17157 25.4645C0.97631 25.2692 0.659727 25.2692 0.464465 25.4645C0.269203 25.6597 0.269203 25.9763 0.464465 26.1716L3.64645 29.3536ZM3.5 -2.18557e-08L3.5 29L4.5 29L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="black" />
          </svg>
        </div>
      </div>
    </section>
    <section menu-color="light" className="bg-red">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex items-center">
        <p className="text-32px whitespace-pre-line text-white uppercase">
          “ Design is not just <br />
          what it looks like and feels like. <br />
          Design is how it works. “ <br />
          <span className="text-28px normal-case">- Steve Jobs</span>
        </p>
      </div>
    </section>
    <section menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <h2 className="text-52px text-red">ABOUT US</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <p className="text-32px text-white uppercase">
            <span className="text-red">H:THREE</span> Is a multinational <br />
            communication firm who belives in <br />
            equal partnership, Supporter with <br />
            strong local talents.
          </p>
        </div>
      </div>
    </section>
    <section menu-color="light" style={{ backgroundColor: '#6F6F6F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <h2 className="text-52px text-white">PHILOSHOPHY</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <p className="text-32px text-white uppercase">
            “Creating unique conversation <br />
            with identifiable result.”
          </p>
        </div>
      </div>
    </section>
    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-52px">OUR WORKS</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="grid grid-cols-2 xl:gap-12 gap-6 mb-6">
          {[...new Array(6)].map((_, index) => (
            <div key={index} className="flex justify-center items-center">
              <img className="w-full" src="/images/Placeholder.png" alt="Placeholder" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end mt-6">
          <h2 className="text-20px mb-0 mr-4">
            See More
          </h2>
          <Arrow />
        </div>
      </div>
    </section>
    <OurPeople data={data['our-people']} />
    <section menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-52px text-white">AWWARDS</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <div className="flex-1 grid grid-rows-3 grid-flow-col gap-6">
            {[...new Array(5)].map((_, index) => (<Fragment key={index}>
              {index === 2 &&
                <div className="flex items-center mt-6">
                  <h2 className="text-20px text-white mb-0 mr-4">
                    See More
                </h2>
                  <Arrow color="white" />
                </div>
              }
              <div key={index} className="flex mb-6">
                <img className="h-16 mr-8" src="/images/awwards-1.png" alt="Awwards 1" />
                <div className="text-white">
                  <h2 className="text-22px">2019 LIA Chinese <br /> Creativity Show: Gold </h2>
                  <p className="text-default">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                </div>
              </div>
            </Fragment>))}
          </div>
        </div>
      </div>
    </section>
    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="hidden md:block w-4/12">
            <img src="/logo-text.png" alt="Logo" />
          </div>
          <div className="md:ml-12">
            <h2 className="text-48px text-red">H:THREE OFFICE</h2>
            <p className="text-20px mb-4" style={{ color: '#4F4F4F' }}>
              <span className="mr-6">Tel. +62 21 27516000</span>
              <span>Fax. +62 21 2751608</span>
            </p>
            <p className="text-20px mb-4" style={{ color: '#4F4F4F' }}>Mail. H3roes@h-three.id</p>
            <p className="text-20px mb-4" style={{ color: '#333333' }}>
              PT. Hita Wistara Mahir <br />
              Jalan Kyai Maja lantai 1 No.4 <br />
              Kebayoran Baru <br />
              Jakarta 12120, Indonesia <br />
            </p>
          </div>
        </div>
        <div className="flex justify-between border-gray-200 border-t-2 py-6">
          <div>
            <a style={{ color: '#757575', opacity: 0.4 }} className="text-default mr-6">Terms</a>
            <a style={{ color: '#757575', opacity: 0.4 }} className="text-default">Hakuhodo Global</a>
          </div>
          <div>
            <span style={{ color: '#757575', opacity: 0.4 }} className="text-default mr-3">@ Hakuhodo H3 2020 all rights reserved</span>
            <i style={{ color: '#757575', opacity: 0.4 }} className="text-default icon twitter" aria-hidden="true" />
            <i style={{ color: '#757575', opacity: 0.4 }} className="text-default icon linkedin" aria-hidden="true" />
            <i style={{ color: '#757575', opacity: 0.4 }} className="text-default icon google" aria-hidden="true" />
            <i style={{ color: '#757575', opacity: 0.4 }} className="text-default icon facebook f" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  </>)
}
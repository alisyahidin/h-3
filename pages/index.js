import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ScrollDown from 'components/ScrollDown'
import Arrow from 'components/Arrow'
import { LogoSVG } from 'components/Logo'
import axios from 'lib/axios'
import OurPeople from 'components/OurPeople'
import { OurWorksList } from './our-works'
import { AwardList } from './awards'
import { gsap } from 'gsap'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('components/Logo'), { ssr: false })

if (process.browser) {
  const ScrollToPlugin = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollToPlugin)
}

const getMenuColor = element => {
  const sections = process.browser
    ? [...document.getElementsByTagName('section')].map(el => ({
      color: el.getAttribute('menu-color'),
      y: el.offsetTop
    }))
    : []

  return sections.filter(section => section.y <= window.pageYOffset + element?.current?.offsetTop).pop()?.color
}

const scrollToDown = () => {
  const scrollable = [...document.getElementsByTagName('section')]
    .map(el => el.offsetTop)
    .filter(val => val > window.pageYOffset)

  gsap.to(window, { duration: 2, scrollTo: { y: scrollable[0] }, ease: 'expo.out' })
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('/landing-page')
  const { data: ourWork } = await axios.get('/our-works-page')
  const { data: awards } = await axios.get('/awards-page')
  return {
    props: {
      data: data,
      works: ourWork.works,
      awards: awards.awards,
    }
  }
}

export default function Home({ data, works, awards, HamburgerMenu }) {
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

    <Logo color={menuColor} />
    <HamburgerMenu
      ref={menu}
      color={menuColor}
    />
    <ScrollDown
      ref={scrollDown}
      color={scrollDownColor}
      onClick={scrollToDown}
    />

    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <LogoSVG className="mb-4" width={194} />
          <img src="/Hakuhodo.svg" alt="Hakuhodo" />
        </div>
        <div className="flex flex-col items-center">
          <p onClick={scrollToDown} className="cursor-pointer text-14px mb-4">HERE WE ARE</p>
          <svg onClick={scrollToDown} className="cursor-pointer" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <OurWorksList data={works.filter((_, index) => index < 6)} className="mb-6" />
        <Link href="/our-works">
          <a className="flex items-center justify-end mt-6 text-red">
            <h2 className="text-20px mb-0 mr-4">
              See More
            </h2>
            <Arrow />
          </a>
        </Link>
      </div>
    </section>
    <OurPeople data={data.our_peoples} />
    <section menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-52px text-white">AWARDS</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <AwardList
            icon
            className="mb-6"
            data={awards.filter((_, index) => index < 5)}
            link={
              <Link href="/awards">
                <a className="flex items-center mt-6 md:order-4 order-5">
                  <h2 className="text-20px text-white mb-0 mr-4">
                    See More
                </h2>
                  <Arrow color="white" />
                </a>
              </Link>
            }
          />
        </div>
      </div>
    </section>
    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="hidden md:flex w-2/12 flex-1 flex-col justify-center items-center">
            <LogoSVG className="mb-4" width={194} />
            <img src="/Hakuhodo.svg" alt="Hakuhodo" />
          </div>
          <div className="md:ml-12" style={{ flex: 2 }}>
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
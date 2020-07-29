import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ScrollDown from 'components/ScrollDown'
import Arrow from 'components/Arrow'
import Content from 'components/Content'
import Quotes from 'components/Quotes'
import { LogoSVG } from 'components/Logo'
import axios from 'lib/axios'
import { OurWorksList } from './our-works'
import { AwardList } from './awards'
import { gsap } from 'gsap'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('components/Logo'), { ssr: false })
const OurPeople = dynamic(() => import('components/OurPeople'), { ssr: false })

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
  const data = await axios.get('/landing-page')
  const works = await axios.get('/our-works-page')
  const awards = await axios.get('/awards-page')
  const footer = await axios.get('/footer')

  return {
    props: {
      data,
      works: works.works,
      awards: awards.awards,
      footer
    }
  }
}

export default function Home({ data, works, awards, footer, HamburgerMenu }) {
  const menu = useRef(null)
  const scrollDown = useRef(null)
  const [menuColor, setMenuColor] = useState(getMenuColor(menu) ?? 'hide')
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

    {menuColor !== 'hide' && <Logo color={menuColor} />}
    <HamburgerMenu
      ref={menu}
      color={menuColor === 'hide' ? 'dark' : menuColor}
    />
    <ScrollDown
      ref={scrollDown}
      color={scrollDownColor === 'hide' ? 'dark' : scrollDownColor}
      onClick={scrollToDown}
    />

    <section id="home" menu-color="hide" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <LogoSVG className="mb-4 w-5/12 md:w-auto" width={194} />
          <img className="w-8/12 md:w-auto" src="/Hakuhodo.svg" alt="Hakuhodo" />
        </div>
        <div className="flex flex-col items-center">
          <p onClick={scrollToDown} className="cursor-pointer text-14px mb-4">HERE WE ARE</p>
          <svg onClick={scrollToDown} className="cursor-pointer" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.64645 29.3536C3.84171 29.5488 4.15829 29.5488 4.35355 29.3536L7.53553 26.1716C7.73079 25.9763 7.73079 25.6597 7.53553 25.4645C7.34027 25.2692 7.02369 25.2692 6.82843 25.4645L4 28.2929L1.17157 25.4645C0.97631 25.2692 0.659727 25.2692 0.464465 25.4645C0.269203 25.6597 0.269203 25.9763 0.464465 26.1716L3.64645 29.3536ZM3.5 -2.18557e-08L3.5 29L4.5 29L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="black" />
          </svg>
        </div>
      </div>
    </section>
    <Quotes data={data.quotes} />
    <section id="about-us" menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-end md:items-center">
          <h2 className="text-32px md:text-52px text-red">ABOUT US</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <div className="text-20px md:text-32px text-white uppercase" style={{ whiteSpace: 'break-spaces' }}>
            <Content text={data['about_us']} />
          </div>
        </div>
      </div>
    </section>
    <section id="philosophy" menu-color="light" style={{ backgroundColor: '#6F6F6F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-end md:items-center">
          <h2 className="text-32px md:text-52px text-white">PHILOSOPHY</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center text-20px md:text-32px">
          <Content text={data['philosophy']} />
        </div>
      </div>
    </section>
    <section id="our-works" menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-32px md:text-52px">OUR WORKS</h2>
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
    <OurPeople id="our-people" data={data.our_peoples} />
    <section id="awards" menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-32px md:text-52px text-white">AWARDS</h2>
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
    <section menu-color="hide" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 pb-0 md:pb-12 pt-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          {footer.logo && <div className="hidden md:flex w-2/12 flex-1 flex-col justify-center items-center">
            <img src={process.env.NEXT_PUBLIC_API_URI + footer.logo.url} alt="Hakuhodo" />
          </div>}
          <div className="md:ml-64" style={{ flex: 2 }}>
            <h2 className="text-32px text-red">{footer.title}</h2>
            {footer.telephone && <p className="text-20px mb-0" style={{ color: '#4F4F4F' }}>
              Tel. {footer.telephone}
            </p>}
            {footer.faximile && <p className="text-20px mb-0" style={{ color: '#4F4F4F' }}>
              Fax. {footer.faximile}
            </p>}
            <p className="text-20px mb-4" style={{ color: '#4F4F4F' }}>Mail. <a style={{ color: '#4F4F4F' }} href="mailto:contactus@h-three.id">contactus@h-three.id</a></p>
            <p className="text-20px mb-4 mt-8 md:mt-0" style={{ color: '#4F4F4F', whiteSpace: 'break-spaces' }}>
              {footer.address}
            </p>
          </div>
        </div>
        <div className="flex justify-between border-gray-200 border-t-2 py-6">
          <div>
            <a style={{ color: '#757575', opacity: 0.4 }} className="text-12px md:text-default mr-6">Terms</a>
            <a style={{ color: '#757575', opacity: 0.4 }} className="text-12px md:text-default">Hakuhodo Global</a>
          </div>
          <div className="hidden md:block">
            <span style={{ color: '#757575', opacity: 0.4 }} className="text-12px md:text-default mr-3">@ Hakuhodo H3 2020 all rights reserved</span>
            {footer?.social_media?.map(({ name, link }, index) => link && (
              <a key={index} href={link} target="_blank">
                <i style={{ color: '#757575', opacity: 0.4 }} className={`text-12px md:text-default icon ${name}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:hidden px-8 py-6 justify-between" style={{ backgroundColor: '#F2F2F2' }}>
        <span style={{ color: '#757575', opacity: 0.4 }} className="text-12px md:text-default mr-3">@ Hakuhodo H3 2020 all rights reserved</span>
        <div>
          {footer?.social_media?.map(({ name, link }, index) => link && (
            <a key={index} href={link} target="_blank">
              <i style={{ color: '#757575', opacity: 0.4 }} className={`text-12px md:text-default icon ${name}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  </>)
}
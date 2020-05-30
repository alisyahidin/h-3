import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Logo from 'components/Logo'

export default function Home({ HamburgerMenu }) {
  const menu = useRef(null)
  const [menuColor, setMenuColor] = useState('dark')

  useEffect(() => {
    const sections = [...document.getElementsByTagName('section')].map(el => ({
      color: el.getAttribute('menu-color'),
      y: el.offsetTop
    }))

    const onScroll = () => {
      setMenuColor(
        sections.filter(section => section.y <= window.pageYOffset + menu?.current?.offsetTop).pop()?.color
      )
    }
    document.addEventListener('scroll', onScroll)
    return () => document.addEventListener('scroll', onScroll)
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

    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex items-center">
          <img src="/logo-text.png" alt="Hakuhodo" />
        </div>
        <div className="py-20">
          <p className="cursor-pointer text-xl">HERE WE ARE</p>
        </div>
      </div>
    </section>
    <section menu-color="light" className="bg-red">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex items-center">
        <p className="text-4xl whitespace-pre-line text-white uppercase">
          “ Design is not just <br />
          what it looks like and feels like. <br />
          Design is how it works. “ <br />
          <span className="text-3xl normal-case">- Steve Jobs</span>
        </p>
      </div>
    </section>
    <section menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <h2 className="text-5xl text-red">ABOUT US</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <p className="text-4xl text-white uppercase">
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
          <h2 className="text-5xl text-white">PHILOSHOPHY</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="flex items-center">
          <p className="text-4xl text-white uppercase">
            “Creating unique conversation <br />
            with identifiable result.”
          </p>
        </div>
      </div>
    </section>
    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-5xl">OUR WORKS</h2>
        </div>
        <div style={{ flexGrow: 2 }} className="grid grid-cols-2 xl:gap-12 gap-6">
          {[...new Array(6)].map((_, index) => (
            <div key={index} className="flex justify-center items-center">
              <img className="w-full" src="/images/Placeholder.png" alt="Placeholder" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-right">
          See More
        </h2>
      </div>
    </section>
    <section menu-color="light" style={{ height: '100vh', backgroundColor: '#6F6F6F' }}></section>
    <section menu-color="light" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center mb-12">
          <h2 className="text-5xl text-white">AWWARDS</h2>
        </div>
        <div style={{ flexGrow: 2 }}>
          {[...new Array(4)].map((_, index) => (
            <div key={index} className="flex mb-12">
              <img className="h-16 mr-8" src="/images/awwards-1.png" alt="Awwards 1" />
              <div className="text-white">
                <h2 className="text-3xl">2019 LIA Chinese Creativity Show: Gold </h2>
                <p className="text-2xl">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
              </div>
            </div>
          ))}
          <h2 className="ml-24 -3xl text-white">
            See More
          </h2>
        </div>
      </div>
    </section>
    <section menu-color="dark" className="bg-white">
      <div className="container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="w-4/12">
            <img src="/logo-text.png" alt="Logo" />
          </div>
          <div>
            <h2 className="text-5xl text-red">H:THREE OFFICE</h2>
            <p className="text-xl">
              <span className="mr-6">Tel. +62 21 27516000</span>
              <span>Fax. +62 21 2751608</span>
            </p>
            <p className="text-xl">Mail. H3roes@h-three.id</p>
            <p className="text-xl">
              PT. Hita Wistara Mahir <br />
              Jalan Kyaki Maja lantai 1 No.4 <br />
              Kebayoran Baru <br />
              Jakarta 12120, Indonesia <br />
            </p>
          </div>
        </div>
        <div className="flex justify-between border-gray-200 border-t-2 py-6">
          <div>
            <a className="text-gray-600 mr-6">Terms</a>
            <a className="text-gray-600">Hakuhodo Global</a>
          </div>
          <div>
            <span className="mr-3 text-gray-600">@ Hakuhodo H3 2020 all rights reserved</span>
            <i className="text-gray-600 icon twitter" aria-hidden="true" />
            <i className="text-gray-600 icon linkedin" aria-hidden="true" />
            <i className="text-gray-600 icon google" aria-hidden="true" />
            <i className="text-gray-600 icon facebook f" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  </>)
}
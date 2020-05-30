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
      <div style={{ height: '100vh' }} className="container mx-auto flex flex-col items-center">
        <div className="flex-1 flex items-center">
          <img src="/logo-text.png" alt="Hakuhodo" />
        </div>
        <div className="py-20">
          <p className="cursor-pointer text-xl">HERE WE ARE</p>
        </div>
      </div>
    </section>
    <section menu-color="light" style={{ height: '100vh' }} className="bg-red"></section>
    <section menu-color="light" style={{ height: '100vh', backgroundColor: '#221F1F' }}></section>
    <section menu-color="light" style={{ height: '100vh', backgroundColor: '#6F6F6F' }}></section>
    <section menu-color="dark" style={{ height: '100vh' }} className="bg-white"></section>
    <section menu-color="light" style={{ height: '100vh', backgroundColor: '#221F1F' }}></section>
  </>)
}
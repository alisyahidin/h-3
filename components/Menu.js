import { useState, useRef, useEffect } from 'react'
// import { createPortal } from 'react-dom'
import Link from 'next/link'
import Router from 'next/router'
import { gsap } from 'gsap'
import clsx from 'clsx'

const menu = [
  {
    href: '/',
    title: ['01', 'HOME']
  },
  {
    href: '/about-us',
    title: ['02', 'ABOUT US']
  },
  {
    href: '/philoshophy',
    title: ['03', 'PHILOSHOPHY']
  },
  {
    href: '/our-works',
    title: ['04', 'OUR WORKS']
  },
  {
    href: '/our-people',
    title: ['05', 'OUR PEOPLE']
  },
  {
    href: '/awards',
    title: ['06', 'AWARDS']
  },
]

// const MenuWrapper = ({ children }) => process.browser ? createPortal(children, document.getElementById('menu-wrapper')) : children

const Menu = () => {
  const [active, setActive] = useState(false)
  const menuElement = useRef(null)

  useEffect(() => {
    active
      ? gsap.to(menuElement.current, 0.4, { left: 0 })
      : gsap.to(menuElement.current, 0.3, { left: '100%' })
  }, [active])

  return (<>
    <div className="fixed md:fixed--center right-0 mr-8 sm:mr-12 lg:mr-16 xl:mr-24 z-10 mt-6 md:mt-0">
      <button
        type="button"
        onClick={() => setActive(prevActive => !prevActive)}
        className={clsx(['hamburger hamburger--squeeze', active && 'is-active'])}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
    {/* <MenuWrapper> */}
    <div ref={menuElement} style={{ left: '100%', zIndex: 5 }} className="fixed h-screen w-screen flex bg-white py-24">
      <div className="hidden md:flex h-100 flex-1 items-center justify-center border-gray-400 border-r-2">
        <div className="px-10">
          <img src="logo-text.png" alt="H-3" />
          <p className="lg:text-2xl text-xl uppercase menu-title">
            <b>H:THREE</b> Is a multinational <br />
            communication firm who belives in equal <br />
            partnership, Supporter with strong local talents.
          </p>
        </div>
      </div>
      <div className="h-100 flex-1 flex items-center justify-center">
        <ul className="md:mr-16">
          {menu.map((item, index) => (
            <li key={index} className="mb-3">
              <Link href={item.href}>
                <a
                  onClick={() => setActive(false)}
                  className={clsx(['menu-link lg:text-3xl text-2xl cursor-pointer', Router.pathname === item.href && 'menu-link--active'])}
                >
                  {item.title[0]}
                  <p className="lg:text-5xl text-4xl ml-6 inline-block">{item.title[1]}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* </MenuWrapper> */}
  </>)
}

export default Menu
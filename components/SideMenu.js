import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import clsx from 'clsx'
import { LogoSVG } from 'components/Logo'

const menu = [
  {
    href: 'home',
    title: ['01', 'HOME']
  },
  {
    href: 'about-us',
    title: ['02', 'ABOUT US']
  },
  {
    href: 'philosophy',
    title: ['03', 'PHILOSOPHY']
  },
  {
    href: 'our-works',
    title: ['04', 'OUR WORKS']
  },
  {
    href: 'our-people',
    title: ['05', 'OUR PEOPLE']
  },
  {
    href: 'awards',
    title: ['06', 'AWARDS']
  },
]

const MenuList = ({ show, setShow }) => {
  const menuElement = useRef(null)
  const router = useRouter()

  const scrollTo = id => {
    setShow(false)
    gsap.to(window, { duration: 1, scrollTo: id, ease: 'power2.in' })
    router.replace('/' + id)
  }

  useEffect(() => {
    show
      ? gsap.to(menuElement.current, 1.5, { left: '0%', ease: "expo.out" })
      : gsap.to(menuElement.current, 1.3, { left: '100%', ease: "expo.out" })
  }, [show])

  return createPortal(
    <div ref={menuElement} style={{ left: '100%', zIndex: 5 }} className="fixed top-0 h-screen w-screen flex bg-white py-24">
      <div className="hidden md:flex h-100 flex-1 items-center justify-center border-gray-400 border-r-2">
        <div className="px-10 flex flex-col items-start">
          <div className="flex flex-col items-center mb-12">
            <LogoSVG className="mb-4" width={194} />
            <img src="/Hakuhodo.svg" alt="Hakuhodo" />
          </div>
          <p className="text-default uppercase menu-title" style={{ lineHeight: '28px' }}>
            <b style={{ color: '#CD697B' }}>H:THREE</b> Is a multinational <br />
            communication firm who believes in equal <br />
            partnership, Supported with strong local talents.
            </p>
        </div>
      </div>
      <div className="h-100 flex-1 flex items-center justify-center">
        <ul className="md:mr-16">
          {menu.map((item, index) => (
            <li key={index} className="mb-5">
              <a
                onClick={e => {
                  e.preventDefault()
                  scrollTo('#' + item.href)
                }}
                className={clsx(['menu-link text-22px cursor-pointer', (location.hash === '#' + item.href || router.pathname === '/' + item.href) && 'menu-link--active'])}
              >
                {item.title[0]}
                <p className="text-42px font-bold ml-6 inline-block">{item.title[1]}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body)
}

const SideMenu = ({ show, setShow }) => {
  const [render, setRender] = useState(false)
  useEffect(() => { setRender(process.browser) }, [])

  return render
    ? <MenuList show={show} setShow={setShow} />
    : null
}

export default SideMenu
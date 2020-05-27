import { useState, useRef, useEffect } from "react"
import { gsap } from 'gsap'
import clsx from 'clsx'

const Menu = () => {
  const [active, setActive] = useState(false)
  const menuElement = useRef(null)

  useEffect(() => {
    active
      ? gsap.to(menuElement.current, 0.4, { left: 0 })
      : gsap.to(menuElement.current, 0.4, { left: '100%' })
  }, [active])

  return (<>
    <div className="fixed md:fixed--center right-0 mr-8 sm:mr-12 lg:mr-16 xl:mr-24 z-10 mt-6 md:mt-0">
      <button
        type="button"
        onClick={() => setActive(!active)}
        className={clsx(['hamburger hamburger--squeeze', active && 'is-active'])}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div ref={menuElement} className="fixed h-screen w-screen bg-orange-100">
    </div>
  </>)
}

export default Menu
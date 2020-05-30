import 'styles/index.scss'
import 'semantic-ui-css/semantic.min.css'
import "react-datepicker/dist/react-datepicker.css"

import { useState, forwardRef } from 'react'
import clsx from 'clsx'
import SideMenu from 'components/SideMenu'

const HamburgerMenu = forwardRef(({ color = "light", menuActive, setMenuActive }, ref) =>
  <div ref={ref} className="fixed md:fixed--center right-0 mr-8 sm:mr-12 lg:mr-16 xl:mr-24 z-10 mt-6 md:mt-0">
    <button
      type="button"
      onClick={() => setMenuActive(active => !active)}
      className={clsx(['hamburger hamburger--squeeze', menuActive && 'is-active'])}
    >
      <span className="hamburger-box">
        <span className={`hamburger-inner hamburger-inner--${color}`} />
      </span>
    </button>
  </div>
)

function App({ Component, pageProps }) {
  const [active, setActive] = useState(false)

  return <>
    <Component
      {...pageProps}
      HamburgerMenu={forwardRef(({ color }, ref) => <HamburgerMenu ref={ref} color={color} menuActive={active} setMenuActive={setActive} />)}
      setMenuActive={setActive}
    />
    <SideMenu show={active} setShow={setActive} />
  </>
}

export default App
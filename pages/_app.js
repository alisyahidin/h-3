import 'styles/index.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { useState, forwardRef, useEffect } from 'react'
import Router from 'next/router'
import { start as startLoading, done as stopLoading, configure } from 'nprogress'
import SideMenu from 'components/SideMenu'
import FloatingMenu from 'components/FloatingMenu'
import NavbarMobile from 'components/NavbarMobile'

function App({ Component, pageProps }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    configure({ showSpinner: window.innerWidth > 768 })
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    Router.events.on('routeChangeError', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
      Router.events.off('routeChangeError', stopLoading)
    }
  }, [])

  return <>
    <NavbarMobile menuActive={active} setMenuActive={setActive} />
    <Component
      {...pageProps}
      HamburgerMenu={forwardRef(({ color }, ref) => <FloatingMenu ref={ref} color={color} menuActive={active} setMenuActive={setActive} />)}
      setMenuActive={setActive}
    />
    <SideMenu show={active} setShow={setActive} />
  </>
}

export default App
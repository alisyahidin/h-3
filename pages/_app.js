import 'styles/index.scss'
import 'semantic-ui-css/semantic.min.css'
import "react-datepicker/dist/react-datepicker.css"

import { useState, forwardRef } from 'react'
import SideMenu from 'components/SideMenu'
import FloatingMenu from 'components/FloatingMenu'

function App({ Component, pageProps }) {
  const [active, setActive] = useState(false)

  return <>
    <Component
      {...pageProps}
      HamburgerMenu={forwardRef(({ color }, ref) => <FloatingMenu ref={ref} color={color} menuActive={active} setMenuActive={setActive} />)}
      setMenuActive={setActive}
    />
    <SideMenu show={active} setShow={setActive} />
  </>
}

export default App
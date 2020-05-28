import 'styles/index.scss'
import 'semantic-ui-css/semantic.min.css'
import "react-datepicker/dist/react-datepicker.css"

import { useRouter } from 'next/router'
import Menu from 'components/Menu'
import Logo from 'components/Logo'

function App({ Component, pageProps }) {
  const router = useRouter()
  const isAdminPage = (/\/admin/g).test(router.pathname)

  return <>
    {!isAdminPage && <>
      <Logo />
      <Menu />
    </>}
    <Component {...pageProps} />
  </>
}

export default App
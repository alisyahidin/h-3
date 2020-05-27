import '../styles/index.scss'
import 'semantic-ui-css/semantic.min.css'

import Menu from '../components/Menu'
import Logo from '../components/Logo'

function App({ Component, pageProps }) {
  return <>
    <Logo />
    <Menu />
    <Component {...pageProps} />
  </>
}

export default App
import { useState } from 'react'
import Media from '../components/admin/Media'

const useMedia = () => {
  const [show, setShow] = useState(false)
  const close = () => setShow(false)
  const open = () => setShow(true)

  return { open, close, Component: () => show && <Media open={show} closeModal={close} /> }
}

export default useMedia
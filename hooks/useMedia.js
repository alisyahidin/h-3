import { useState } from 'react'
import Media from 'components/widgets/_components/Media'

const useMedia = () => {
  const [show, setShow] = useState(false)
  const close = () => setShow(false)
  const open = () => setShow(true)

  return { open, close, Component: ({ onSelected }) => show && <Media open={show} closeModal={close} onSelected={onSelected} /> }
}

export default useMedia
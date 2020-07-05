import { useEffect, useState } from "react"

const isMobile = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    process.browser && setIsMobileDevice(window.innerWidth < 768)
  }, [])

  return isMobileDevice
}

export default isMobile
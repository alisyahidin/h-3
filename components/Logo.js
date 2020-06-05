import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Logo = ({ color }) => {
  const [render, setRender] = useState(false)
  useEffect(() => { setRender(process.browser) }, [])

  return render ? createPortal(
    <div className="fixed md:fixed--center left-0 top-0 ml-8 sm:ml-12 lg:ml-16 z-10 md:z-0 mt-6 md:mt-0">
      <Link href="/">
        <img className={`cursor-pointer logo logo--${color}`} src="/logo.svg" alt="Logo" />
      </Link>
    </div>,
    document.body
  ) : null
}

export default Logo
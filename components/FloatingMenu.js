import { forwardRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

const FloatingMenu = forwardRef(({ color = "light", menuActive, setMenuActive }, ref) => {
  const [render, setRender] = useState(false)
  useEffect(() => { setRender(process.browser) }, [])

  return render ? createPortal(
    <div ref={ref} className="hidden md:block fixed md:fixed--center right-0 top-0 mr-8 sm:mr-12 lg:mr-16 z-10 mt-6 md:mt-0">
      <button
        type="button"
        onClick={() => setMenuActive(active => !active)}
        className={clsx(['hamburger hamburger--squeeze', menuActive && 'is-active'])}
      >
        <span className="hamburger-box">
          <span className={`hamburger-inner hamburger-inner--${color}`} />
        </span>
      </button>
    </div>,
    document.body
  ) : null
})

export default FloatingMenu
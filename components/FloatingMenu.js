
import { forwardRef } from 'react'
import clsx from 'clsx'

const FloatingMenu = forwardRef(({ color = "light", menuActive, setMenuActive }, ref) =>
<div ref={ref} className="fixed md:fixed--center right-0 mr-8 sm:mr-12 lg:mr-16 xl:mr-20 z-10 mt-6 md:mt-0">
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

export default FloatingMenu
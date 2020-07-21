import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const NavbarMobile = ({ menuActive, setMenuActive }) => {
  return (
    <div className="md:hidden fixed left-0 top-0 w-full bg-white px-5 py-4 flex justify-between items-center z-10">
      <Link href="/">
        <a>
          <img src="/H3.svg" alt="Logo" className="cursor-pointer logo logo--dark" style={{ width: 36 }} />
        </a>
      </Link>
      <button
        type="button"
        onClick={() => setMenuActive(active => !active)}
        className={clsx(['hamburger hamburger--squeeze', menuActive && 'is-active'])}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner hamburger-inner--dark" />
        </span>
      </button>
    </div>
  )
}

export default NavbarMobile

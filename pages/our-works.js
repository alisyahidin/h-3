import { useState } from 'react'
import Logo from 'components/Logo'
import clsx from 'clsx'

const menu = ['All', 'Branding', 'Web', 'Development', 'Films']

const OurWorks = ({ HamburgerMenu }) => {
  const [active, setActive] = useState('All')

  return (<>
    <Logo />
    <HamburgerMenu color="dark" />
    <div className="container xl:px-24 md:px-16 px-8 py-12 mx-auto">
      <nav className="flex items-center justify-between mb-8">
        <h1 className="text-52px font-medium uppercase">Our Works</h1>
        <ul className="flex text-14px uppercase">
          {menu.map((menuText, index) =>
            <li key={index} onClick={() => setActive(menuText)} className={clsx(["ml-2 font-medium cursor-pointer p-3", active === menuText ? 'text-red' : 'text-gray-500'])}>{menuText}</li>
          )}
        </ul>
      </nav>
      <p className="text-gray-600 text-default mb-16" style={{ lineHeight: '28px' }}>
        Hakuhodo is one of the most highly decorated agencies in the world for creative work. Unique among Asian-based agencies, we have twice won the Cannes Grand Prix and were awarded a Special Lion commemorating Cannes Lions’ 50th anniversary. A selection of our recent creative work that has received top awards at major international advertising competitions is shown here.
      </p>
      <div style={{ flexGrow: 2 }} className="grid grid-cols-2 xl:gap-12 gap-6">
        {[...new Array(6)].map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <img className="w-full" src="/images/Placeholder.png" alt="Placeholder" />
          </div>
        ))}
      </div>
    </div>
  </>)
}

export default OurWorks
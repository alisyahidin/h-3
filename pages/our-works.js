import { useState } from 'react'
import clsx from 'clsx'
import WorkCard from 'components/WorkCard'
import Logo from 'components/Logo'
import axios from 'lib/axios'

export const OurWorksList = ({ data, className }) => {
  const [work, setWork] = useState(null)

  return (<>
    <div style={{ flexGrow: 2 }} className={clsx("grid grid-cols-2 xl:gap-12 gap-6", className)}>
      {data.map((work, index) => (
        <WorkCard onClick={() => setWork(work)} data={work} key={index} />
      ))}
    </div>
    {work !== null && <WorkCard.Detail data={work} closeDetail={() => setWork(null)} />}
  </>)
}

export const getServerSideProps = async () => {
  const data = await axios.get('/api/collection/page/our-work')

  return {
    props: {
      data: data.entry.data,
      menu: data
        ?.collection
        ?.files[0]
        ?.fields
        ?.find(({ name }) => name === 'works')
        ?.fields
        ?.find(({ name }) => name === 'category')
        ?.options ?? []
    }
  }
}

const OurWorks = ({ data, menu, HamburgerMenu }) => {
  const [active, setActive] = useState(menu[0])

  return (<>
    <Logo />
    <HamburgerMenu color="dark" />
    <div className="container xl:px-24 md:px-16 px-8 py-12 mx-auto">
      <nav className="flex items-center justify-between mb-8">
        <h1 className="text-52px font-medium uppercase">{data.title}</h1>
        <ul className="flex text-14px uppercase">
          {menu.map((menuText, index) =>
            <li key={index} onClick={() => setActive(menuText)} className={clsx(["ml-2 font-medium cursor-pointer p-3", active === menuText ? 'text-red' : 'text-gray-500'])}>{menuText}</li>
          )}
        </ul>
      </nav>
      <p className="text-gray-600 text-default mb-16" style={{ lineHeight: '28px' }}>
        {data.description}
      </p>
      <OurWorksList data={data.works} />
    </div>
  </>)
}

export default OurWorks
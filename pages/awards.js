import { useState } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import axios from 'lib/axios'
import AwardCard from 'components/AwardCard'

const Logo = dynamic(() => import('components/Logo'), { ssr: false })

export const AwardList = ({ data, className, icon = false, link = null }) => {
  const [award, setAward] = useState(null)

  return (<>
    <div style={{ flexGrow: 2 }} className={clsx("grid gap-6 grid-cols-1", icon ? 'md:grid-cols-2' : 'md:grid-cols-3', className)}>
      {data.map((award, index) => (
        <AwardCard onClick={() => setAward(award)} data={award} sort={index + 1} icon={icon} key={index} />
      ))}
      {link && link}
    </div>
    {award !== null && <AwardCard.Detail data={award} closeDetail={() => setAward(null)} />}
  </>)
}

export const getServerSideProps = async () => {
  const data = await axios.get('/api/collection/page/awards')

  return {
    props: {
      data: data.entry.data
    }
  }
}

const Awards = ({ data, HamburgerMenu }) => {
  return (<>
    <Logo color="light" />
    <HamburgerMenu color="light" />
    <div className="min-h-screen" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 mx-auto">
        <h1 className="text-52px text-white font-medium uppercase mb-12">{data.title}</h1>
        <p className="text-white opacity-75 text-22px mb-20" style={{ lineHeight: '28px' }}>
          {data.description}
        </p>
        <AwardList data={data.awards} />
      </div>
    </div>
  </>)
}

export default Awards
import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import WorkCard from 'components/WorkCard'
import axios from 'lib/axios'

const Logo = dynamic(() => import('components/Logo'), { ssr: false })

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
  const data = await axios.get('/our-works-page')

  return {
    props: {
      data: data
    }
  }
}

const OurWorks = ({ logo, data, HamburgerMenu }) => {
  return (<>
    <Head>
      <title>Hakuhodo - Our Works</title>
    </Head>
    <Logo logo={logo} hide={false} color="dark" />
    <HamburgerMenu color="dark" />
    <section id="our-works" className="min-h-screen pt-20 md:pt-0" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 mx-auto">
        <nav className="flex items-center justify-between mb-8">
          <h1 className="text-32px md:text-52px font-medium uppercase">{data.title}</h1>
        </nav>
        <p className="text-gray-600 text-default mb-16" style={{ lineHeight: '28px' }}>
          {data.description}
        </p>
        <OurWorksList data={data.works} />
      </div>
    </section>
  </>)
}

export default OurWorks
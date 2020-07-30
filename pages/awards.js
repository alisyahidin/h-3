import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import clsx from 'clsx'
import axios from 'lib/axios'
import AwardCard from 'components/AwardCard'
import { gsap } from 'gsap'

const Logo = dynamic(() => import('components/Logo'), { ssr: false })

if (process.browser) {
  const ScrollToPlugin = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollToPlugin)
}

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
  const data = await axios.get('/awards-page')

  return {
    props: {
      data: data
    }
  }
}

const Awards = ({ logo, data, HamburgerMenu }) => {
  useEffect(() => {
    process.browser && gsap.to(window, { duration: 0.5, scrollTo: { y: 0 } })
  }, [])

  return (<>
    <Head>
      <title>Hakuhodo - Awards</title>
    </Head>
    <Logo logo={logo} hide={false} color="light" />
    <HamburgerMenu color="light" />
    <section id="awards" className="min-h-screen pt-20 md:pt-0" style={{ backgroundColor: '#221F1F' }}>
      <div className="container xl:px-24 md:px-16 px-8 py-12 mx-auto">
        <h1 className="text-32px md:text-52px text-white font-medium uppercase mb-12">{data.title}</h1>
        <p className="text-white opacity-75 text-22px mb-20" style={{ lineHeight: '28px' }}>
          {data.description}
        </p>
        <AwardList data={data.awards} />
      </div>
    </section>
  </>)
}

export default Awards
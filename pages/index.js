import Head from 'next/head'

export default function Home() {
  return (<>
    <Head>
      <title>Hakuhodo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-white">
      <div className="container h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex items-center">
          <img src="/logo-text.png" alt="Hakuhodo"/>
        </div>
        <div className="py-20">
          <p className="cursor-pointer text-xl">HERE WE ARE</p>
        </div>
      </div>
    </div>
    <div className="h-screen bg-red"></div>
  </>)
}

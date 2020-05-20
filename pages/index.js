import Head from 'next/head'

export default function Home() {
  return (<>
    <Head>
      <title>Hakuhodo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-white">
      <div className="container min-h-screen mx-auto flex flex-col items-center">
        <div className="flex-1 flex items-center">
          <h1 className="text-5xl text-center">HAKUHODO</h1>
        </div>
        <div className="py-24">
          <button className="bg-red py-3 px-4" style={{ color: '#FFF !important' }}>Here we are</button>
        </div>
      </div>
    </div>
  </>)
}

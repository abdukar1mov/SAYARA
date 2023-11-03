import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Taycan from '../components/Taycan'
import Cayenne from '../components/Cayenne'
import Carerra from '../components/Carerra'
import Macan from '../components/Macan'

export default function Home() {
  return (
    <>
      <Head>
        <title>SAYARA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar />
      <Header />
      <Taycan />
      <Cayenne />
      <Carerra />
      <Macan />
    </>
  )
}

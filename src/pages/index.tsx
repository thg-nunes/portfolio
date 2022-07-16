import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { HomePageStyle } from './index-styled'

const Home: NextPage = () => {
  const myname = 'THIAGO NUNES'
  let [initialName, setInitialName] = useState('')


  for(let i =0; i < myname.length; i++) {
    setTimeout(() => setInitialName(myname.slice(0, initialName.length + 1)) , 200)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageStyle>
        <section>
          <p>Olá  <span>👋</span>, eu sou</p>
          <p> {initialName} </p>
          <p>Front-End Developer</p>
        </section>
        <Image src='/image.svg' width='550px' height='550px' />
      </HomePageStyle>
    </>
  )
}

export default Home

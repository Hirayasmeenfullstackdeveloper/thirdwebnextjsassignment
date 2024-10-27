import React from 'react'
import Header from "@/app/components/header/page"
import Hero from "@/app/components/hero/page"
import About from "@/app/components/about/page"
import Service from "@/app/components/service/page"
import Footer from "@/app/components/footer/page"
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home




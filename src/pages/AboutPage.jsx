import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const AboutPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage
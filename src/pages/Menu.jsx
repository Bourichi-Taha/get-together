import React from 'react'
import Navbar from '../components/Navbar'
import Food from '../components/Food'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Menu = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Food />
      <Footer />
    </div>
  )
}

export default Menu
import React from 'react'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const BookPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Book />
      <Footer />
    </div>
  )
}

export default BookPage
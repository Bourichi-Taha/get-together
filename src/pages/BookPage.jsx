import React from 'react'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const BookPage = () => {
  return (
    <div>
        <Navbar />
        <Book />
        <Footer />
    </div>
  )
}

export default BookPage
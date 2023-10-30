import React from 'react'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import Food from '../components/Food'
import About from '../components/About'
import Book from '../components/Book'
import Client from '../components/Client'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
    return (
        <div className="App">
            <ScrollToTop />
            <Hero />
            <Offer />
            <Food />
            <About />
            <Book />
            <Client />
            <Footer />
        </div>
    )
}

export default Home
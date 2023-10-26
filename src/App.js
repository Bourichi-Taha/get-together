import './App.css';
import About from './components/About';
import Book from './components/Book';
import Client from './components/Client';
import Food from './components/Food';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Offer/>
      <Food />
      <About/>
      <Book/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;

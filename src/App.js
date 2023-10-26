import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Menu from './pages/Menu';

function App() {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/booking' element={<BookPage/>} />
        <Route path='/menu' element={<Menu/>} />

    </Routes>
  );
}

export default App;

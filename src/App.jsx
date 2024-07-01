import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css'
import Navbar from './Navbar'
import FavouriteList from './components/FavouriteList';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import SignUp from './components/SignUp';

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<SignUp/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/favourites' element={<FavouriteList/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
      </Routes>
    </>
  )
}

export default App

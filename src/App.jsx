import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Nav/header'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'
import mens from "./Components/Assets/banner_mens.png"
import women from "./Components/Assets/banner_women.png"
import kid from "./Components/Assets/banner_kids.png"
import ShopProvider from './Context/ShopContext'


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes><Route path='/' element={<Shop/>} />
     <Route path='/mens' element={<ShopCategory  banner={mens} category="men"/>} />
     <Route path='/womens' element={<ShopCategory  banner={women} category="women"/>} />
     <Route path='/kids' element={<ShopCategory  banner={kid} category="kid"/>} />
     <Route path='/product' element={<Product/>} >
      <Route path=':productId' element={<Product/>} />
     </Route>
     <Route path='/cart' element={<Cart/>} />
     <Route path='/login' element={<LoginSignup/>} /></Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App

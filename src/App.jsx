import { useState } from 'react'
import { ReactContext } from './context/context'
import Navbar from './components/Navbar/Navbar'
import Item from './components/CartsItem/Item'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Carts from './pages/Carts'
import Products from './pages/Products'
import Posts from './pages/Posts'
import NotFound from './pages/NotFound'
import './App.scss'

function App() {
  const [arrow, setArrow] = useState(null)
  const addArrowHandler = (arrow) => {
    setArrow(arrow)
  }

  return (
    
    <ReactContext.Provider value = {{
      addArrowHandler,
      arrow
    }}>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Item/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/carts/:slug" element={<Item/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:slug" element={<Item/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </ReactContext.Provider>
    
  )
}

export default App

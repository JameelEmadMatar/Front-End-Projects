import React from 'react'
import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import ProductList from './Components/ProductList'
import About from './Components/About'
import Details from './Components/Details'
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
        <div className="App">
            <NavBar/>
                <Routes>
                        <Route path='/' element={
                            <>
                                <Slider/>
                                <ProductList/>
                            </>
                        }
                        />
                        <Route path='about' element={<About/>}/>
                        <Route path='product/:productId' element={<Details/>}/>
                </Routes>
        </div>
    </>
  )
}

export default App

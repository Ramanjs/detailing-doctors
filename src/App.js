import React, {useRef} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import {HashRouter, Routes, Route} from 'react-router-dom'
import {useInView} from 'react-intersection-observer'

function App() {
  const {ref, inView} = useInView({
    threshold: 0
  })

  return (
    <HashRouter>
      <Navbar inView={inView}/>
      <Routes>
        <Route path="/" element={<Home vref={ref}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

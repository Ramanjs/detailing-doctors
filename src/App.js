import React, {useRef} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Studios from './pages/Studios'
import Confirmation from './pages/Confirmation'
import BookSlot from './pages/BookSlot'
import Contact from './pages/Contact'
import KnowMore from './pages/KnowMore'
import Footer from './components/Footer'
import {HashRouter, Routes, Route} from 'react-router-dom'
import {useInView} from 'react-intersection-observer'
import PrivacyPolicy from './pages/PrivacyPolicy'

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
        <Route path="/studios" element={<Studios />} />
        <Route path="/bookslot" element={<BookSlot />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/know-more" element={<KnowMore />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

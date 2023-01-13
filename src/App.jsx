import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContainer from './containers/maincontainer/MainContainer'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainContainer />}>
              <Route index element={<Header />}/>
              <Route path="about" element={<About />}/>
              <Route path="experience" element={<Experience />}/>
              <Route path="portfolio" element={<Portfolio />}/>
              <Route path="contact" element={<Contact />}/>
              <Route path="footer" element={<Footer />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Nav from '../../components/nav/Nav'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

const MainContainer = () => {
  const [language, setLanguage] = useState('fr')
  return (
      <div>
        <Header language={language} setLanguage={setLanguage}/>
        <Nav />
        <About language={language} setLanguage={setLanguage}/>
        <Experience language={language} setLanguage={setLanguage}/>
        <Portfolio language={language} setLanguage={setLanguage}/>
        <Contact language={language} setLanguage={setLanguage}/>
        <Footer language={language} setLanguage={setLanguage}/>
      </div>
  )
}

export default MainContainer
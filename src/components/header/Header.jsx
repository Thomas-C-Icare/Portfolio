import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/frontPageMe.jpg'
import HeaderSocials from './HeaderSocials'
import HeaderLanguage from './HeaderLanguage'

const Header = ({language, setLanguage}) => {
  return (
    <header >
      {/* ENGLISH TEXT */}
      <div className={ language === 'en' ? "container header__container" : "hidden"} >
        <h5 >Hello i'm</h5>
        <h1 >Thomas Campo</h1>
        <h5 className="text-light">Fullstack Web Developper</h5>
        <CTA language={language} setLanguage={setLanguage} />
        <HeaderSocials language={language} setLanguage={setLanguage} />
        <HeaderLanguage language={language} setLanguage={setLanguage} />
      {/* TODO: regler image qui change de taille quand on reduit l'ecran */}
        <div className='me me__main-page'>
          <img src={ME} alt="of myself" className="me__main-page"/>
        </div >

      </div>
      {/* FRENCH TEXT */}
      <div className={ language === 'fr' ? "container header__container" : "hidden"}>
        <h5>Bonjour, je suis </h5>
        <h1>Thomas Campo</h1>
        <h5 className="text-light">Fullstack Web Developper</h5>
        <CTA language={language} setLanguage={setLanguage} />
        <HeaderSocials language={language} setLanguage={setLanguage} />
        <HeaderLanguage language={language} setLanguage={setLanguage} />
      {/* TODO: regler image qui change de taille quand on reduit l'ecran */}
        <div className='me'>
          <img src={ME} alt="of myself" className='me'/>
        </div >
      </div>
    </header>
  )
}

export default Header
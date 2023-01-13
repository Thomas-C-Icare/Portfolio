import React from 'react'
import './header.css'
import { GB, FR } from 'country-flag-icons/react/3x2'

const HeaderLanguage = ({ language, setLanguage}) => {
  return (
    <div className="header__languages">
      <button className='btn__language' onClick={() => setLanguage('fr')}><FR  /></button>
      <button className='btn__language' onClick={() => setLanguage('en')}><GB /></button>
      
    </div>
  )
  
}

export default HeaderLanguage
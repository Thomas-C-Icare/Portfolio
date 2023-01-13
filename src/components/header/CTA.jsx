import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'

const CTA = ({language, setLanguage}) => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">{language === 'fr' ? "Télécharger CV":"Download CV"}</a>
        <a href="#contact" className="btn btn-primary">{language === 'fr' ? "Discutons":"Let's Talk"}</a>
    </div>
  )
}

export default CTA
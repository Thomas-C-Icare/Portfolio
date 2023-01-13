import React from 'react'
import './footer.css'
import { HashLink } from 'react-router-hash-link';

const Footer = ({language, setLanguage}) => {
  return (
    <footer >
      <span className="footer__logo">
        <HashLink className='footer__logo-hashlink' smooth to="#">THOMAS CAMPO</HashLink>
        </span>
      <div className="footer__copyright">
          <small>
            &copy;{language === 'fr' ? "Thomas Campo portfolio. Tous droit réservés.":"Thomas Campo portfolio. All rights reserved."}
          </small>
      </div>
    </footer>
  )
}

export default Footer
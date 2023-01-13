import React from 'react'
import './footer.css'
import { HashLink } from 'react-router-hash-link';

const Footer = ({language, setLanguage}) => {
  return (
    <footer >
      <a className="footer__logo">
        <HashLink smooth to="#">THOMAS CAMPO</HashLink>
        </a>
      <div className="footer__copyright">
          <small>
            &copy;{language === 'fr' ? "Thomas Campo portfolio. Tous droit réservés.":"Thomas Campo portfolio. All rights reserved."}
          </small>
      </div>
    </footer>
  )
}

export default Footer
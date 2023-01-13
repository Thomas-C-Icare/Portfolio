import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/thomas-campo-développeur-web/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Thomas-C-Icare" target="_blank"  rel="noreferrer"><GoMarkGithub /></a>   
    </div>
  )
}

export default HeaderSocials
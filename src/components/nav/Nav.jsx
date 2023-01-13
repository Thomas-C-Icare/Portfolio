
import { HashLink } from 'react-router-hash-link';
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BsLightbulb} from "react-icons/bs"
import {TbMessageCircle} from "react-icons/tb"

import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <span onClick={ () =>  setActiveNav('#')}className={activeNav === '#' ? 'active': ''}>
          <HashLink smooth to="#"><AiOutlineHome /></HashLink>
          </span>
         
        <span onClick={ () =>  setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
           <HashLink to="#about"><AiOutlineUser /></HashLink>
           </span>
           
        <span onClick={ () =>  setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
           <HashLink to="#experience"><BiBook /></HashLink>
           </span>
           
        <span onClick={ () =>  setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
          <HashLink to="#portfolio"><BsLightbulb /></HashLink>
          </span>
           
        <span onClick={ () =>  setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          <HashLink to="#contact"><TbMessageCircle /></HashLink>
          </span>
    </nav>
  )
}

export default Nav
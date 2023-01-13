
import React, { useState } from 'react'
import './portfolio.css'
import Snake from './Snake'
import {BsFillExclamationDiamondFill} from 'react-icons/bs'
import gamerHelper from "../../assets/gamerhelper.png"

const Portfolio = ({language, setLanguage}) => {
  const [gameStarted,setGameStarted] =useState(false)
  const [openSnake, setOpenSnake] = useState(false)
  const [direction, setDirection] = useState('RIGHT')

  const keyPressed = (e) => {
      e = window.event;
      switch (e.keyCode) {
        case 90:
            setDirection( 'UP')
          break;
        case 83:
            setDirection('DOWN')
          break;
        case 81:
            setDirection('LEFT')
          break;
        case 68:
            setDirection('RIGHT') 
          break;
        case 87:
            setDirection( 'UP')
          break;
        case 65:
            setDirection('RIGHT') 
          break;
        case 13:
          setGameStarted(!gameStarted)
        break;
        case 32:
          setGameStarted(!gameStarted)
          e.preventDefault()
        break;
        default:
          break;
      }
    }
  return (
    <section id='portfolio'>
      <h5>{language === 'fr' ? "Mes projets recent":"My recent work"}</h5>
      <h2>Portfolio</h2>
      <h5 className='work__in_progess_h5'><BsFillExclamationDiamondFill /> Work in progress
      </h5>
      <div className="portfolio__container "  >
        <article className='portfolio__item'onKeyDown={keyPressed}>
            <h3>Snake</h3>
            <div className="portfolio__item-image">
              <Snake className="game__arena" language={language} gameStarted={gameStarted} setGameStarted={setGameStarted} 
              openSnake={openSnake}  direction={direction} setDirection={setDirection}
              />
            </div>
            <div className="portfolio__item-cta">
              <button className='btn btn-primary ' onClick={() => {setOpenSnake(!openSnake)}} >Open/close</button>
            </div>
        </article>
        <article className="portfolio__item">
            <h3>Gamer Helper</h3>
            <div className="portfolio__item-image width-image">
              <img src={gamerHelper} alt="Aperçu du projet" className='portfolio__item__image-width' />
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thomas-C-Icare/Gamer-helper-back" className="btn" rel="noreferrer" target="_blank">
                GitHub
              </a>
              <a href="https://gamer-helper.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        
      </div>
      
    
    </section>
  )
}

export default Portfolio
import React, { useEffect, useState, useCallback } from 'react'
import SnakeStart from './SnakeStart'
import Food from './food'

const Snake = ({language, gameStarted, setGameStarted, openSnake, direction, setDirection}) => {
    const getRandomCoordinates = () => {
        let min = 1
        let max = 98
        let x = Math.floor((Math.random()*(max-min+1)+min)/4)*4;
        let y = Math.floor((Math.random()*(max-min+1)+min)/4)*4;
      return [x,y]
    }
    const [snakeDots, setSnakeDots] = useState([[0,0],[4,0]])
    const [snakeFood, setSnakeFood] = useState(getRandomCoordinates)
    const [snakeDotsGameOver, setSnakeDotsGameOver] = useState([])
    const [speed, setSpeed] = useState(200)
    

    const onPressedKey = (e) => {
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
      }
    }
    const moveSnake = useCallback(() => {
      if(gameStarted){
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case 'RIGHT':
          head = [head[0] + 4, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 4, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 4];
          break;
        case 'UP':
          head = [head[0], head[1] - 4];
          break;
        default:
      }
      dots.push(head)
      dots.shift()
      setSnakeDots(dots)
    }},[snakeDots, direction, gameStarted]);

    useEffect(() => {
      const interval = setInterval(() => {
        moveSnake();
      }, speed);
      return () => clearInterval(interval);
    }, [speed, moveSnake])

    
    const onGameOver = useCallback(() => {
      setSnakeDotsGameOver(snakeDots)
      setSnakeDots([[0,0],[4,0]]);
      setSnakeFood(getRandomCoordinates);
      setDirection('RIGHT')
      setSpeed(200)
      setGameStarted(false)
    },[setGameStarted, setDirection, snakeDots ])

    const checkIfOutOfBorders = useCallback (() => {
      let head = snakeDots[snakeDots.length -1]
      if(head[0] >=100 || head[1] >=100 || head[0] < 0 || head[1] < 0){
        onGameOver()
      }
    },[onGameOver, snakeDots])

    const checkIfCollapsed = useCallback(() => {
      let snake = [...snakeDots];
      let head = snake[snake.length - 1];
      snake.pop();
      snake.forEach(dot => {
        if (head[0] === dot[0] && head[1] === dot[1]) {
          onGameOver();
        }
      })
    }, [onGameOver, snakeDots])

    const enlargeSnake = useCallback(() => {
      let newSnake = [...snakeDots];
      newSnake.unshift([])
      setSnakeDots(newSnake)
    },[snakeDots])
    
    const increaseSpeed = useCallback(() => {
      if (speed >= 150) {
        setSpeed(speed - 10);
      }
      if(speed < 150 && speed >= 100) {
        setSpeed(speed - 5);
      }
      if (speed < 100){
        setSpeed(speed - 2);
      }
    },[speed])
    const checkIfEat = useCallback(() => {
      let head = snakeDots[snakeDots.length - 1];
      let food = snakeFood;
      if (head[0] === food[0] && head[1] === food[1]) {
        setSnakeFood(
          // dots =[...snakeDots]
          // dots.map(() => {
            
          // })
          getRandomCoordinates
        )
        enlargeSnake();
        increaseSpeed();
      }
    }, [enlargeSnake, increaseSpeed, snakeDots, snakeFood])
    
    useEffect(() => {
      checkIfOutOfBorders();
      checkIfCollapsed();
      checkIfEat()
     }, [checkIfOutOfBorders, checkIfCollapsed, checkIfEat, snakeDots])
 
  return  (
    <div className='snake__container'>
      <div className={openSnake ?'game__arena__break': 'game__arena'} tabIndex="0" onKeyDown={onPressedKey} >
        <SnakeStart snakeDots={snakeDots} setSnakeDots={setSnakeDots}/>
        <div className={!gameStarted && openSnake ?   "snake__container snake__rules" : 'hidden'   }>
          <h2>START</h2>
          <p> {language === 'fr' ? "Appuyer sur espace/entrée":"You can press space/enter to start !"}</p>
          <h3 >{language === 'fr' ? "Touche":"Command"}</h3>
          <div className='key key__solo'>
            <span> {language === 'fr' ? "Z":"W"}</span>
          </div>
          <div >
            <div className='key key__multiple'>
              <span>{language === 'fr' ? "Q":"A"}</span>
              <span>S</span>
              <span>D</span>
            </div>
          </div>
          <p className={openSnake && gameStarted ? "hidden": ""}>{language === 'fr' ? "Dernier score" : "Last score"} : {snakeDotsGameOver.length }</p>
        </div>
        <Food snakeFood={snakeFood} setSnakeFood={setSnakeFood}/>
      </div>
    </div>
  )
}

export default Snake
import React from 'react'
import Apple from '../../assets/apple.svg'

const food = ({snakeFood, setSnakeFood}) => {
    const style = {
        left: snakeFood[0] + '%',
        top: snakeFood[1] + '%'
    }
  return (
    <div className='snake__food' style={style}>
        <img src={Apple} alt="apple"/>
    </div>
  )
}

export default food
import React from 'react'

const SnakeStart = ({snakeDots}) => {
 
  return (
    <div>
        {snakeDots.map((dot, i) => {
            const style = {
                left: dot[0] + '%',
                top: dot[1] + '%'
            }
            return (
                <div className='snake__dot' key={i} style={style}></div>
            )
        })}
    </div>
  )
}

export default SnakeStart
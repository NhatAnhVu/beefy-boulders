import React from 'react'

const Benefit = ({ benefits }) => {

  return (
    <div className='home__section--benefits--details'>
      {benefits.images.map((image, index) => {
        return (
          <div className='home__section--benefits--details-item' key={index}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Benefit
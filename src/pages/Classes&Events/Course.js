import React from 'react'

const Course = ({ data }) => {
  const {id, name, prices, desc} = data;

  return (
    <div>
      <h4><strong>{`${id}. ${name}`}</strong></h4>
      {prices.map((price, index) => {
        return <p key={index}><i>{`- ${price.type}: ${price.price}`}</i></p>
      })}
      <p><i>What will you get? </i> &nbsp; {desc}</p>
    </div>
  )
}

export default Course
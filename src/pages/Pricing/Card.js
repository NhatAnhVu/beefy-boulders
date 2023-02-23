import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Card = ({ priceData }) => {
  const { name, price, details, features } = priceData;

  return (
    <div className="pricing__section--price">
      <div className="pricing__section--price-title">
        <h4>{name}</h4>
        <h3>{price}</h3>
        <br />
      </div>
      <hr />
      <p><strong>{details[0]}</strong></p>
      {features.map((feature, index) => {
        return <p key={index}><FaRegCheckCircle className='check-icon' /> {feature}</p>
      })}
      <p><strong>{details[1]}</strong></p>
      <p><strong>{details[2]}</strong></p>
    </div>
  )
}

export default Card
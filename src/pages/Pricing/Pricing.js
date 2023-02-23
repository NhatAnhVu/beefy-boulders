import React from 'react';
import { pricingData } from '../../data/pricingData'
import Card from './Card';

const Pricing = () => {
  return (
    <section className='pricing'>
      <div className="pricing__bg bg"></div>
      <div className="pricing__section section">
        <h1 className="section__title">Pricing</h1>
        <div className="pricing__section--prices">
          {pricingData.map((priceData, index) => {
            return <Card key={index} priceData={priceData} />
          })}
        </div>
        <div className="pricing__section--discount-and-rental">
          <h3>Youth / Young Adult</h3>
          <p>20% Discount on all entry prices for 22 & under</p>
          <br />
          <h3>Rental Pricing</h3>
          <p>Chalk - 20.000₫</p>
          <p>Shoes - 30.000₫</p>
        </div>
        <div className="pricing__section--course">
          <h2>Intro to Bouldring Course</h2>
          <p>First time climbers can purchase 3 days of climbing for 500.000₫</p>
          <p>The pass includes shoe and chalk and a short 30 minute intro to bouldering with experienced mentors</p>
          <p><i>*Course must be used within 7 days of purchase</i></p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
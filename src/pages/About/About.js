import React from 'react';
import BoulderingClass from '../About/images/310890978_423026109942089_6317256234631878400_n.jpg';
import HangingMan from '../About/images/312974095_438766678368032_6369865977378490562_n.jpg';
import { rulesData } from './rulesData';
import { descData } from './descData';
import Paragraph from './Paragraph';
import FAQ from './FAQ';

const About = () => {
  return (
    <section className='about'>
      <div className="about__bg bg"></div>
      <div className="about__section section">
        <div className="about__section--desc">
          <h1 className='section__title'>First Time Climbers</h1>
          <h3>Climbing is for all ages and athletic abilities
          </h3>
          <img src={BoulderingClass} alt="people-climbing" className='about__section--desc--img' />
          {descData.map((desc, index) => {
            return <Paragraph key={index} data={desc}/>
          })}
        </div>
        <hr />
        <div className="about__section--rules">
          <h1 className='section__title'>Rules</h1>
          <img src={HangingMan} alt="hanging-man" className='about__section--rules--img' />
          {rulesData.map((rule, index) => {
            return <Paragraph key={index} data={rule}/>
          })}
        </div>
        <hr />
        <div id='FAQ' className="FAQ">
          <FAQ />
        </div>
      </div>
    </section >
  )
}

export default About
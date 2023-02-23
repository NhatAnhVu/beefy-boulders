import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { benefitsData } from './benefitsData';
import Benefit from './Benefit';
import Review from './Review';

const Home = () => {
  const [index, setIndex] = useState(1);
  const benefits = benefitsData[index]

  const handleClassesClick = () => {
    setIndex(0);
  }
  const handleTrainingClick = () => {
    setIndex(1);

  }
  const handleCommunityClick = () => {
    setIndex(2);
  }


  return (
    <section className='home'>
      <div className="home__bg bg"></div>
      <div className="home__section section">
        <div className="home__section--intro">
          <h1 className='section__title'>Beefy Boulders - Hanoi Climbing Gym</h1>
          <p className='section__slogan'>"Climb Happy, Climb Healthy, <strong>Climb Beefy</strong>"</p>
        </div>
        <div className="home__section--benefits">
          <h3><i>What you can get from Beefy Boulders</i></h3>
          <div className="home__section--benefits--button">
            <button onClick={handleClassesClick} className={index === 0 ? 'active' : ""}>Bouldering Classes</button>
            <button onClick={handleTrainingClick} className={index === 1 ? 'active' : ""}>Training</button>
            <button onClick={handleCommunityClick} className={index === 2 ? 'active' : ""}>Community</button>
          </div>
          <Benefit benefits={benefits} />
        </div>
      </div>
      <div id='home__section--class' className="home__section--class bg">
        <p>Get Started Today</p>
        <h1>Bouldering Class</h1>
        <p>We make it easy to get started in a new sport. It doesn't matter your athletic background, bouldering is great for everyone</p>
        <Link to="/classesevents">
          <button>Get Started</button>
        </Link>
      </div>
      <div id='review' className="home__section--review">
        <h2>Our Reviews</h2>
        <div className='underline'></div>
        <Review />
      </div>
    </section>
  )
}

export default Home
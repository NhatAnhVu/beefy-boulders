import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { reviewsData } from './reviewsData';
import { useState, useEffect } from 'react';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = reviewsData[index];
  const checkNumber = (number) => {
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsData.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
      </div>
      <h4>{name}</h4>
      <p className='info'><i>{text}</i></p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
}

export default Review
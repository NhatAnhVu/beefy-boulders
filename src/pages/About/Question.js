import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='question'>
      <header className='question__title'>
        <h4>{data.title}</h4>
        <button className='question__btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{data.info}</p>}
    </div>
  )
}

export default Question
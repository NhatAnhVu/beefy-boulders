import React from 'react';
import { faqData } from './faqData';
import Question from './Question';

const FAQ = () => {
  return (
    <div className='about__section--FAQ'>
      <h1 className='section__title'>F.A.Q</h1>
      {faqData.map(faq => {
        return <Question key={faq.id} data={faq} />
      })}
    </div>
  )
}

export default FAQ
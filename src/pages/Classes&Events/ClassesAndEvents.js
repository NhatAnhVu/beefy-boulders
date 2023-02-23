import React from 'react';
import Course from './Course';
import {classesData} from './classesData';
import { eventsData } from './eventsData';

const ClassesAndEvents = () => {
  return (
    <section className='classes-events'>
      <div className="classes-events__bg bg"></div>
      <div className="classes__section section">
        <h1 className="section__title">Bouldering Classes</h1>
        <p className='classes__section--desc'>If you're new to climbing or looking to increase your grade, classes are a great way to go. Learn the basics and fundamental technique that will apply to all forms of climbing and allow you to send new routes you didn't imagine you were capable of.</p>
        <div className="classes__section--info">
          <h3>CLASSES AND TRAINING</h3>
          {classesData.map((classData) => {
            return <Course key={classData.id} data={classData} />
          })}
        </div>
      </div>
      <hr />
      <div className="events__section section">
        <h1 className="section__title">Bouldering Events</h1>
        <div className="events__section--info">
          <h3>EVENTS</h3>
          {eventsData.map(eventData => {
            return <Course key={eventData.id} data={eventData} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ClassesAndEvents
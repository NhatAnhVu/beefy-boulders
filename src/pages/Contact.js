import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact__bg bg"></div>
      <div className="contact__section section">
        <h1 className="section__title">Come And Join With Us</h1>
        <div className="contact__section--info">
          <div className="contact__section--info--hours">
            <h3>Opening Hours</h3>
            <p><strong>Monday-Friday:</strong> 4pm - 10pm</p>
            <p><strong>Saturday:</strong> 1pm - 11pm</p>
            <p><strong>Sunday:</strong> 1pm - 10pm</p>
          </div>
          <div className="contact__section--info--address">
            <h3>Address</h3>
            <p>2QCM+FR3, Yên Hoà, Cầu Giấy, Hà Nội, Vietnam, Hanoi, Vietnam</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29794.159796638494!2d105.784459!3d21.021881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3dd2becbdfc0e8eb!2sBeefy%20Boulders%20Hanoi%20Climbing!5e0!3m2!1sen!2stw!4v1676985463582!5m2!1sen!2stw" width="700" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Contact
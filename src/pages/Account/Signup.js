import React, { useState } from 'react';
import { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>
      <Card className='card'>
        <Card.Body>
          <h1 className='section__title'>Sign Up</h1>
        </Card.Body>
        <Form className='card-main'>
          <Form.Group id='email'>
            <Form.Label className='form-label'>Email</Form.Label> <br />
            <Form.Control className='form-input' type='email' ref={emailRef}></Form.Control>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label className='form-label'>Password</Form.Label> <br />
            <Form.Control className='form-input' type='password' ref={passwordRef}></Form.Control>
          </Form.Group>
          <Form.Group id='password-confirm'>
            <Form.Label className='form-label'>Password Confirmation</Form.Label> <br />
            <Form.Control className='form-input' type='password' ref={passwordConfirmRef}></Form.Control>
          </Form.Group>
          <Button className='card-button' type='submite'>Sign Up</Button>
          <hr />
          <div className='card-text'>
            Already have an account? Log In
          </div>
        </Form>
      </Card>

    </>
  )
}

export default Signup
import React from 'react';
import './register-form-radio.css'
import { Field } from 'redux-form';

const RegisterFormRadio = () => {
  return (
    <div>
      <label className="register-form-label check-label">
        <Field 
          name="agree"
          id="radio" 
          className="register-form-radio" 
          type="checkbox" 
          component="input"
          required
        />
        <span className="check__box"></span>
        <span className="register-form-radio-text">
          I accept the terms of use
        </span>
      </label>
    </div>
  )
};

export default RegisterFormRadio;
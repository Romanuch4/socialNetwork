import React from 'react';
import './register-form-radio.css'

const RegisterFormRadio = () => {
  return (
    <div>
      <label className="register-form-label check-label">
        <input 
          id="radio" 
          className="register-form-radio" 
          type="checkbox" 
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
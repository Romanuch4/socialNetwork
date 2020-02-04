import React from 'react';
import './register-form-input.css'

const RegisterFormInput = ({type, name, label, id}) => {
  return (
    <div>
      <label htmlFor={id} className="register-form-label">
        {label}
      </label>
      <input 
        placeholder={label}
        name={name} 
        type={type} 
        id={id} 
        className="register-form-input"
        required/>
    </div>
  )
};

export default RegisterFormInput;
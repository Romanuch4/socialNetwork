import React from 'react';
import './register.css';
import RegisterTitle from './register-title';
import RegisterContent from './register-content';

const Register = () => {
  return (
    <article className="register">
      <RegisterTitle />
      <RegisterContent />
    </article>
  )
};

export default Register;
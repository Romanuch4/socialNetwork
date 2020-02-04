import React from 'react';
import './register-content.css';
import RegisterSubTitle from './register-sub-title';
import RegisterForm from './register-form';

const RegisterContent = () => {
  return (
    <section className="register-content">
      <RegisterSubTitle />
      <RegisterForm />
      <div className="register-content-bottom register-content-bottom-1"></div>
      <div className="register-content-bottom register-content-bottom-2"></div>
      <div className="register-content-bottom register-content-bottom-3"></div>
    </section>
  )
};

export default RegisterContent;
import React from 'react';
import './register-content.css';
import RegisterSubTitle from './register-sub-title';
import AuthReduxForm from './register-form';

const RegisterContent = () => {
  const onSubmit = formData => {
    console.log(formData);
  }

  return (
    <section className="register-content">
      <RegisterSubTitle />
      <AuthReduxForm onSubmit={onSubmit} />
      <div className="register-content-bottom register-content-bottom-1"></div>
      <div className="register-content-bottom register-content-bottom-2"></div>
      <div className="register-content-bottom register-content-bottom-3"></div>
    </section>
  )
};

export default RegisterContent;
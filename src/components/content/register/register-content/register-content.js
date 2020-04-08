import React from 'react';
import './register-content.css';
import RegisterSubTitle from './register-sub-title';
import AuthReduxForm from './register-form';

const RegisterContent = ({ login }) => {
  const onSubmit = formData => {
    const {email, password} = formData;
    login(email, password, false)
  };

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
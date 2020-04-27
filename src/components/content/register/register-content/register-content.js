import React from 'react';
import './register-content.css';
import RegisterSubTitle from './register-sub-title';
import RegisterForm from './register-form';
import { reduxForm } from 'redux-form';

const RegisterContent = React.memo(({ login, captchaUrl }) => {
  const AuthReduxForm = reduxForm({
    form: 'authentificate',
  })(RegisterForm);
  const onSubmit = formData => {    
    const {email, password, captcha} = formData;
    login(email, password, false, captcha);
  };

  return (
    <section className="register-content">
      <RegisterSubTitle />
      <AuthReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      <div className="register-content-bottom register-content-bottom-1"></div>
      <div className="register-content-bottom register-content-bottom-2"></div>
      <div className="register-content-bottom register-content-bottom-3"></div>
    </section>
  )
});

export default RegisterContent;
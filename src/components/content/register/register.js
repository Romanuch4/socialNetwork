import React from 'react';
import './register.css';
import RegisterTitle from './register-title';
import RegisterContent from './register-content';
import { Redirect } from 'react-router-dom';

const Register = ({ isAuth }) => {
  if (isAuth) return <Redirect to={"/hellow"} />
  return (
    <article className="register">
      <RegisterTitle />
      <RegisterContent />
    </article>
  )
};

export default Register;
import React from 'react';
import './register.css';
import RegisterTitle from './register-title';
import RegisterContent from './register-content';
import { Redirect } from 'react-router-dom';

const Register = ({ isAuth, login }) => {
  if (isAuth) {
    return <Redirect to={"/hellow"} />
  } else {
    return (
      <article className="register">
        <RegisterTitle />
        <RegisterContent login={login} />
      </article>
    );
  };
};

export default Register;
import React from 'react';
import RegisterFormInput from './register-form-input/register-form-input';
import RegisterFormRadio from './register-form-radio';
import RegisterFormButton from './register-form-button';
import { reduxForm } from 'redux-form';

const RegisterForm = ({handleSubmit}) => {
  const input1 = "name";
  const input2 = "email"
  const input3 = "password"
  return (
    <form onSubmit={handleSubmit}>
      <RegisterFormInput label="Name" id={input1} type="text" name={input1} />
      <RegisterFormInput label="Email" id={input2} type={input2} name={input2} />
      <RegisterFormInput label="Password" id={input3} type={input3} name={input3} />
      <RegisterFormRadio />
      <RegisterFormButton />
    </form>
  )
};

const AuthReduxForm = reduxForm({
  form: 'authentificate',
})(RegisterForm);

export default AuthReduxForm;
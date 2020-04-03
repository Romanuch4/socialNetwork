import React from 'react';
import RegisterFormButton from './register-form-button';
import { reduxForm, Field } from 'redux-form';
import { required, minLengthCreator, email, maxLengthCreator } from '../../../../../utils/validators';
import renderField from './register-form-renderField';
import './register-form.css';

const maxLength15 = maxLengthCreator(15);

const minLength2 = minLengthCreator(2);
const minLength6 = minLengthCreator(6);

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, minLength2]}
        className="register-form-input"
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={[email, required]}
        className="register-form-input"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required, minLength6]}
        className="register-form-input"
      />
      <RegisterFormButton />
    </form>
  )
};

const AuthReduxForm = reduxForm({
  form: 'authentificate',
})(RegisterForm);

export default AuthReduxForm;
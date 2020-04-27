import React from 'react';
import RegisterFormButton from './register-form-button';
import { reduxForm, Field } from 'redux-form';
import { required, minLengthCreator, email, } from '../../../../../utils/validators';
import renderField from '../../../common/form-renderField';
import './register-form.css';

const minLength6 = minLengthCreator(6);

const RegisterForm = React.memo(({ handleSubmit, error, captchaUrl }) => {
  const Captcha = () => {
    return (
      <div>
        <img src={captchaUrl} alt="captcha"/>
        <Field
          name="captcha"
          type="text"
          component={renderField}
          label="captcha"
          validate={[required]}
          className="register-form-input"
        />
      </div>
    );
  };
  return (
    <form onSubmit={handleSubmit}>
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
      {captchaUrl && <Captcha />}
      <RegisterFormButton />
      {error && <div className="register-form-error error">{error}</div>}
    </form>
  )
});

const AuthReduxForm = reduxForm({
  form: 'authentificate',
})(RegisterForm);

export default AuthReduxForm;
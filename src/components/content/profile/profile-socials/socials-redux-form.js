import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../register/register-content/register-form/register-form-renderField';

const SocialsForm = ({ handleSubmit, error, contacts }) => {
  debugger
  let i = -1;
  const networks = Object.keys(contacts).map(
    elem => {
      i++;
      return (
        <li key={i} className="profile-socials-item">
          {elem}: <Field name={`contacts.${Object.keys(contacts)[i]}`} type="text" component={renderField} className="socials-form-input"/>
        </li>
      );
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {networks}
      </ul>
      {error && <div className="register-form-error error">{error}</div>}
    </form>
  )
};

const SocialsReduxForm = reduxForm({
  form: 'socials',
})(SocialsForm);

export default SocialsReduxForm;
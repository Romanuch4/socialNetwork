import React from 'react';
import SocialsReduxForm from './socials-redux-form';

export const  SocialsForm = ({contacts, save}) => {
  const onSubmit = formData => {
    const {email, password} = formData;
    save(email, password, false)
  };
  return (
    <SocialsReduxForm contacts={contacts} onSubmit={onSubmit} />
  );
};
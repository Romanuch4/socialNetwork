import React from 'react';
import './profile-networks.css';
import { reduxForm, Field } from 'redux-form';

const NetworksForm = React.memo(({ handleSubmit, isEdit, networks, toggleIsEdit, userId }) => {
  let contacts = [];
  for (let i = 0; i < Object.keys(networks).length; i++) {
    contacts.push(
      <li key={i} className="profile-networks-item">
        {Object.keys(networks)[i]}: {!isEdit && Object.values(networks)[i]}
      </li>
    );
  };

  const contactsInput = Object.keys(networks).map( elem => {
    return (
      <li key={elem} className="profile-networks-item">
        {elem}: 
        <Field name={`contacts.${elem}`} type="text" component="input" className="profile-networks-input"/>
      </li>
    );
  });

  const editContacts = () => {
    toggleIsEdit(!isEdit);
  };
  const isOwner =  window.location.href === 'http://localhost:3000/socialNetwork#/profile';
  
  if (!isEdit) {
    return (
      <div className="profile-networks">
        Contacts: {isOwner && <button onClick={editContacts} className="profile-networks-button">Edit</button>}
        <ul>
          {contacts}
        </ul>
      </div>
    );
  };
  return (  
    <div className="profile-networks">
      Contacts:
      <form onSubmit={handleSubmit}>
        <ul>
          {contactsInput}
        </ul>
        <button className="profile-networks-button">Save</button>
      </form>
    </div>
  );
});

const ProfileNetworks = reduxForm({
  form: 'edit-profile',
})(NetworksForm);

export default ProfileNetworks;
import React from 'react';
import './profile-socials.css';
import { SocialsForm } from './socials-form';

const ProfileSocials = React.memo(({ contacts, isEdit }) => {
  let i = -1;
  let networks = Object.keys(contacts).map(
    elem => {
      i++;
      return (
        <li key={i} className="profile-socials-item">
          {elem}: {Object.values(contacts)[i] || "network is missing"}
        </li>
      );
    }
  );

  if (isEdit) {
    networks = <SocialsForm contacts={contacts} />
  };
  
  return (
    <div className="profile-socials">
      Social networks: <button className="profile-socials-button">Edit profile</button>
      <ul>
        {networks}
      </ul>
    </div>
  );
};

export default ProfileSocials;
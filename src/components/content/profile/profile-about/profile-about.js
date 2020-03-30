import React from 'react';
import './profile-about.css'

const ProfileAbout = ({ about }) => {
  return (
    <div className="profile-about">
      Информация о пользователе: {about!==null ? about : 'Информация отсутствует (:'}
    </div>
  )
};

export default ProfileAbout;
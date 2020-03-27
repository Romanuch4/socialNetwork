import React from 'react';
import './profile-img.css';
import defaultImg from './default.jpg';

const ProfileImg = ({ photos }) => {
  return (
    <div>
      <img className="profile-img" src={photos!==null ? photos : defaultImg} alt="avatar" />
    </div>
  )
};

export default ProfileImg;
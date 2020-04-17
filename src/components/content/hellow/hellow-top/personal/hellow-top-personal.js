import React from 'react';
import './hellow-top-personal.css';
import avatar from './images/avatar.png';

const downloadImage = function() {
  console.log(1234567890);
}

const HellowTopPersonal = () => {
  return (
    <div className="hellow-top-personal">
      <img className="hellow-top-personal-img" src={avatar} alt="your avatar" />
      <div onClick={downloadImage} tabIndex="0" title="download your photo" className="hellow-top-personal-download">
        <i className="fas fa-download"></i>
      </div>
    </div>
  )
};

export default HellowTopPersonal;
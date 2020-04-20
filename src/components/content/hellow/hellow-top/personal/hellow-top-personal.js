import React from 'react';
import './hellow-top-personal.css';

const HellowTopPersonal = React.memo(({downloadPhoto, userImage}) => {
  const input = React.createRef();
  const downloadImage = () => {
    downloadPhoto(input.current.files[0]);
  }

  return (
    <div className="hellow-top-personal">
      <img className="hellow-top-personal-img" src={userImage} alt="your avatar" />
      <div tabIndex="0" title="download your photo" className="hellow-top-personal-download">
        <i className="fas fa-download"></i>
        <input onChange={downloadImage} ref={input} type={"file"} className="hellow-top-personal-input"/>
      </div>
    </div>
  );
});

export default HellowTopPersonal;
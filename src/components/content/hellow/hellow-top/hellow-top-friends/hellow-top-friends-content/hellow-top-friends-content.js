import React from 'react';
import './hellow-top-friends-content.css';
import image1 from '../../../../../../images/Roman.png';
import image2 from '../../../../../../images/Max.jpg';
import image3 from '../../../../../../images/Karina.jpg';
import imageDefault from './image-default/src-default.png';

const HellowTopPFriendsContent = ({stateFriends}) => {
  let src = '';
  const elements = stateFriends.map( item => {
    if(item.image === 'Roman.png') {
      src = image1;
    } else if(item.image === 'Max.jpg') {
      src = image2;
    } else if(item.image === 'Karina.jpg') {
      src = image3;
    } else {
      src = imageDefault;
    }
    return (
      <div className="hellow-top-friends-content-item" key={item.id} data-online={item.online} data-birthday={item.birthday} title={item.name}>
        <img className="hellow-top-friends-content-img" src={src} alt="friend"/>
      </div>
    )
  });

  return (
    <div className="hellow-top-friends-content">
      {elements}
    </div>
  )
};

export default HellowTopPFriendsContent;
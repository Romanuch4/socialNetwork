import React from 'react';
import './friends-item.css';
import avatar1 from '../../../../../../../../images/Roman.png';
import avatar2 from '../../../../../../../../images/Karina.jpg';
import { NavLink } from 'react-router-dom';

const LeftAsideFriendsItem = ({ stateFriends, addFriends }) => {
  let save;
  const elements = stateFriends.map(item => {
    if (item.image === "Roman.png") {
      save = avatar1;
    } else if (item.image === "Karina.jpg") {
      save = avatar2;
    } else {
      save = avatar1;
    };

    let className;
    if (item.online) {
      className = "hellow-content-left_aside-friends-item-block hellow-content-left_aside-friends-item-block-2";
    } else {
      className = "hellow-content-left_aside-friends-item-block hellow-content-left_aside-friends-item-block-1";
    }
    return (
      <div className={className} key={item.id}>
        <NavLink to={`../../../profile/${item.id}`} >
          <img
            src={save}
            alt={item.name}
            className="hellow-content-left_aside-friends-item"
          />
        </NavLink>
      </div>
    );
  });
  return (
    <div>
      <div className="hellow-content-left_aside-friends-items">
        {elements}
      </div>
      <button onClick={addFriends} className="hellow-content-left_aside-friends-button">
        больше
      </button>
    </div>
  );
};

export default LeftAsideFriendsItem;
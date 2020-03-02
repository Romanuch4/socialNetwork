import React from 'react';
import './hellow-content-left_aside-friends-search.css';

const LeftAsideFriendsSearch = ({searchFriendsText, dispatch}) => {
  const inputText = React.createRef();
  const changeInputValue = () => {
    const text = inputText.current.value;
    dispatch({
      type: 'UPDATE-FRIENDS-TEXTS',
      text: text,
    });
  };

  return (
    <div className="hellow-content-left_aside-friends-block">
      <input
        onChange={changeInputValue}
        placeholder="Друзья онлайн..."
        className="hellow-content-left_aside-friends-input"
        ref={inputText}
        value={searchFriendsText}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default LeftAsideFriendsSearch;
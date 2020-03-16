import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends, dispatch, statePosts, searchFriendsText,}) => {
  return (
    <article className="hellow">
      <HellowTop stateFriends={stateFriends} />
      <HellowMain searchFriendsText={searchFriendsText} dispatch={dispatch} statePosts={statePosts}/>
    </article>
  )
};

export default Hellow;
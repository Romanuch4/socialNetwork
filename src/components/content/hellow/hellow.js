import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends, dispatch, statePosts, searchFriendsText, addPosts}) => {
  return (
    <article className="hellow">
      <HellowTop addPosts={addPosts} stateFriends={stateFriends} />
      <HellowMain searchFriendsText={searchFriendsText} dispatch={dispatch} statePosts={statePosts}/>
    </article>
  )
};

export default Hellow;
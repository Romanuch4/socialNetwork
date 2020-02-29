import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends, dispatch, statePosts,  stateEvents,  newPostText,}) => {
  return (
    <article className="hellow">
      <HellowTop dispatch={dispatch} stateFriends={stateFriends} newPostText={newPostText} />
      <HellowMain dispatch={dispatch} statePosts={statePosts} stateFriends={stateFriends} stateEvents={stateEvents} />
    </article>
  )
};

export default Hellow;
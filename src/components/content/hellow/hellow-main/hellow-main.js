import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({stateFriends, statePosts, stateEvents, searchFriendsText, dispatch}) => {
  return (
    <section className="hellow-main">
      <HellowContent searchFriendsText={searchFriendsText} dispatch={dispatch} statePosts={statePosts} stateFriends={stateFriends} stateEvents={stateEvents} />
    </section>
  )
};

export default HellowMain;
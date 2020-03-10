import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({stateFriends, statePosts, dispatch}) => {
  return (
    <section className="hellow-main">
      <HellowContent dispatch={dispatch} statePosts={statePosts} stateFriends={stateFriends}/>
    </section>
  )
};

export default HellowMain;
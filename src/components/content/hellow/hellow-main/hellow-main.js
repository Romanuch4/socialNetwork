import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({stateFriends, statePosts}) => {
  return (
    <section className="hellow-main">
      <HellowContent statePosts={statePosts} stateFriends={stateFriends} />
    </section>
  )
};

export default HellowMain;
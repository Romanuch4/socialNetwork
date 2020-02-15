import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({stateFriends}) => {
  return (
    <section className="hellow-main">
      <HellowContent stateFriends={stateFriends} />
    </section>
  )
};

export default HellowMain;
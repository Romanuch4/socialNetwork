import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends}) => {
  return (
    <article className="hellow">
      <HellowTop stateFriends={stateFriends} />
      <HellowMain stateFriends={stateFriends} />
    </article>
  )
};

export default Hellow;
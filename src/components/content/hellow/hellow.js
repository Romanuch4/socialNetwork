import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';

const Hellow = ({stateFriends}) => {
  return (
    <article className="hellow">
      <HellowTop stateFriends={stateFriends} />
    </article>
  )
};

export default Hellow;
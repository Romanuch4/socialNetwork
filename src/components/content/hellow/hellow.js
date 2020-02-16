import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends, statePosts, addPosts}) => {
  return (
    <article className="hellow">
      <HellowTop addPosts={addPosts} stateFriends={stateFriends} />
      <HellowMain statePosts={statePosts} stateFriends={stateFriends} />
    </article>
  )
};

export default Hellow;
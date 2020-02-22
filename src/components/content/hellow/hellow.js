import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = ({stateFriends, statePosts, addPosts, stateEvents, deleteEvents, newPostText, updatePostTexts}) => {
  return (
    <article className="hellow">
      <HellowTop addPosts={addPosts} stateFriends={stateFriends} newPostText={newPostText} updatePostTexts={updatePostTexts} />
      <HellowMain deleteEvents={deleteEvents} statePosts={statePosts} stateFriends={stateFriends} stateEvents={stateEvents} />
    </article>
  )
};

export default Hellow;
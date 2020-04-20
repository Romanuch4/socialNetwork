import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';

const Hellow = React.memo(({stateFriends, dispatch, statePosts, searchFriendsText, addPosts, downloadPhotoThunkCreator, userImage}) => {
  return (
    <article className="hellow">
      <HellowTop userImage={userImage} downloadPhoto={downloadPhotoThunkCreator} addPosts={addPosts} stateFriends={stateFriends} />
      <HellowMain searchFriendsText={searchFriendsText} dispatch={dispatch} statePosts={statePosts}/>
    </article>
  );
});

export default Hellow;
import React from 'react';
import './hellow.css';
import HellowTop from './hellow-top';
import HellowMain from './hellow-main';
import { Redirect } from 'react-router-dom';

const Hellow = ({stateFriends, dispatch, statePosts, searchFriendsText, isAuth}) => {
  if(!isAuth) return <Redirect to={"/login"} />
  return (
    <article className="hellow">
      <HellowTop stateFriends={stateFriends} />
      <HellowMain searchFriendsText={searchFriendsText} dispatch={dispatch} statePosts={statePosts}/>
    </article>
  )
};

export default Hellow;
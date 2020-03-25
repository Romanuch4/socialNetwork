import React from 'react';
import { Route } from 'react-router-dom';
import Hellow from './hellow';
import ProfileContainer from './profile';
import Exit from './exit';
import Register from './register';
import HellowBottom from './hellow/hellow-bottom';

const Content = ({state, isAuth, dispatch}) => {
  return (
      <>
        <main className="main">
          <Route path='/hellow' render={() => <Hellow 
                                                dispatch={dispatch} 
                                                statePosts={state.posts.posts}
                                                stateFriends={state.friends} 
                                                searchFriendsText={state.searchFriendsText}
                                                isAuth={isAuth}
          />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/exit' render={() => <Exit />} />
          <Route path='/login' render={()=> <Register isAuth={isAuth}/>} />
        </main>
        <HellowBottom />
      </>
  )
};

export default Content;
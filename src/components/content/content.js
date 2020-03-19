import React from 'react';
import { Route } from 'react-router-dom';
import Hellow from './hellow';
import ProfileContainer from './profile';
import Exit from './exit';
import Register from './register';
import HellowBottom from './hellow/hellow-bottom';

const Content = ({state, dispatch}) => {
  return (
      <div>
        <main className="main">
        <Route path='/hellow' render={() => <Hellow 
                                              dispatch={dispatch} 
                                              statePosts={state.posts.posts}
                                              stateFriends={state.friends} 
                                              searchFriendsText={state.searchFriendsText}
        />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/exit' render={() => <Exit />} />
        <Route exact path='/' render={()=> <Register />}/>
      </main>
        <HellowBottom />
      </div>
  )
};

export default Content;
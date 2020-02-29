import React from 'react';
import { Route } from 'react-router-dom';
import Hellow from './hellow';
import Profile from './profile';
import Exit from './exit';
import Register from './register';
import HellowBottom from './hellow/hellow-bottom';

const Content = ({state, addPosts, deleteEvents, updatePostTexts}) => {
  return (
      <div>
        <main className="main">
        <Route path='/hellow' render={() => <Hellow 
                                              addPosts={addPosts} 
                                              statePosts={state.posts.posts}
                                              newPostText={state.posts.newPostText} 
                                              stateFriends={state.friends} 
                                              stateEvents={state.events}
                                              deleteEvents={deleteEvents}
                                              updatePostTexts={updatePostTexts}
        />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/exit' render={() => <Exit />} />
        <Route exact path='/' render={()=> <Register />}/>
      </main>
        <HellowBottom />
      </div>
  )
};

export default Content;
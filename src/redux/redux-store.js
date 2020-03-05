import {createStore, combineReducers} from 'redux';
import PostReducer from './reducers/post-reducer';
import FriendsReducer from './reducers/friends-reducer';
import deleteEventsReducer from './reducers/delete_events-reducer';

let reducers = combineReducers({
  posts: PostReducer,
  friends: FriendsReducer,
  events: deleteEventsReducer,
})

let store = createStore(reducers);


export default store;
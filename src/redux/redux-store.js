import {createStore, combineReducers, applyMiddleware} from 'redux';
import PostReducer from './reducers/post-reducer';
import FriendsReducer from './reducers/friends-reducer';
import deleteEventsReducer from './reducers/delete_events-reducer';
import ProfileReducer from './reducers/profile-reducer';
import authReducer from './reducers/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  posts: PostReducer,
  friends: FriendsReducer,
  events: deleteEventsReducer,
  profile: ProfileReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
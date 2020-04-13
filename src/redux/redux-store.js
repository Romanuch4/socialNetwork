import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PostReducer from './reducers/post-reducer';
import FriendsReducer from './reducers/friends-reducer';
import deleteEventsReducer from './reducers/delete_events-reducer';
import ProfileReducer from './reducers/profile-reducer';
import authReducer from './reducers/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './reducers/app-reducer';

const reducers = combineReducers({
  posts: PostReducer,
  friends: FriendsReducer,
  events: deleteEventsReducer,
  profile: ProfileReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

/* const store = createStore(reducers, applyMiddleware(thunkMiddleware)); */

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
  // other store enhancers if any
));

export default store;
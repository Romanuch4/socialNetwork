import { getProfileThunkCreator } from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === SET_INITIALIZED) {
    return {
      ...state,
      initialized: true,
    };
  };
  return state;
};

const setInitialized = () => ({type: SET_INITIALIZED});

export const initializedApp = () => dispatch => {
  Promise.all([dispatch(getProfileThunkCreator())]).then(() => dispatch(setInitialized()));
};

export default appReducer;
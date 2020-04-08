import { getData } from '../../api/api';
import { stopSubmit } from 'redux-form';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === 'SET_USER_DATA') {
    return {
      ...state,
      ...action.data,
    };
  } else {
    return state;
  };
}

export const setUserData = (userId, email, login, isAuth) => {
  return {
    type: 'SET_USER_DATA',
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};


export const getProfileThunkCreator = () => dispatch => {
  getData.getUser()
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserData(
          response.data.id,
          response.data.email,
          response.data.login,
          true,
          )
        );
      };
    });
};

export const loginThunkCreator = (email, password, rememberMe) => dispatch => {
  getData.login(email, password, rememberMe)
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getProfileThunkCreator());
    } else {
      const message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error';
      dispatch(stopSubmit('authentificate', {_error: message}));
    };
  });
};

export const logoutThunkCreator = () => dispatch => {
  getData.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      };
    });
};

export default authReducer;
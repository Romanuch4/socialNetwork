import { getData } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
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
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};


export const getProfileThunkCreator = () => async dispatch => {
  const response = await getData.getUser();
  if (response.resultCode === 0) {
    dispatch(setUserData(
      response.data.id,
      response.data.email,
      response.data.login,
      true,
    )
    );
  };
  return response;
};

export const loginThunkCreator = (email, password, rememberMe) => async dispatch => {
  const response = await getData.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunkCreator());
  } else {
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('authentificate', { _error: message }));
  };
};

export const logoutThunkCreator = () => async dispatch => {
  const response = await getData.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  };
};

export default authReducer;
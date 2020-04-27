import { getData } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA',
      SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.data,
    };
  } else if (action.type === SET_CAPTCHA_URL) {
    return {
      ...state,
      captchaUrl: action.captchaUrl,
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

export const setCaptchaUrl = captchaUrl => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl,
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

export const loginThunkCreator = (email, password, rememberMe, captchaUrl) => async dispatch => {
  const response = await getData.login(email, password, rememberMe, captchaUrl);
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunkCreator());
  } else {
    if(response.data.resultCode === 10) {
      dispatch(getCaptchaThunkCreator());
    }
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

export const getCaptchaThunkCreator = () => async dispath => {
  const response = await getData.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispath(setCaptchaUrl(captchaUrl));
};

export default authReducer;
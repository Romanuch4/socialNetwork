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
      ...state.isAuth = true,
    };
  } else {
    return state;
  };
}

export const setUserData = (userId, email, login) => {
  return {
    type: 'SET_USER_DATA',
    data: {
      userId,
      email,
      login,
    },
  };
};

export default authReducer;
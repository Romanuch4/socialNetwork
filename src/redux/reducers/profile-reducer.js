import { getData } from '../../api/api';

const initialState = {
  person: {
    aboutMe: 'One love',
    photos: {
      large: '1231231232',
      small: '123wwerwer',
    },
    fullName: 'The best',
  },
  isFetching: false,
  status: "",
}

const UPDATE_USER = 'profile/UPDATE_USER',
  TOOGLE_IS_FETCHING = 'profile/TOOGLE_IS_FETCHING',
  SET_STATUS = 'profile/SET_STATUS';

const ProfileReducer = (state = initialState, action) => {
  if (action.type === UPDATE_USER) {
    return {
      ...state,
      person: action.person,
    };
  } else if (action.type === TOOGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status,
    };
  };
  return state;
};

export const getUser = person => {
  return {
    type: UPDATE_USER,
    person,
  };
};

export const toogleIsFetching = isFetching => {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching,
  };
};

export const setStatus = status => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getProfileThunkCreator = user => async dispatch => {
  let userId = user;
  if (userId === undefined) {
    userId = 2;
  };
  dispatch(toogleIsFetching(true));
  const response = await getData.getProfile(userId);
  dispatch(toogleIsFetching(false));
  dispatch(getUser(response));
};

export const getStatusThunkCreator = userId => async dispatch => {
  const response = await getData.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatusThunkCreator = status => async dispatch => {
  await getData.updateStatus(status);
  dispatch(setStatus(status));
};


export default ProfileReducer;
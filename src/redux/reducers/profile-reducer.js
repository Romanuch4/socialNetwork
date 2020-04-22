import { getData } from '../../api/api';

const initialState = {
  person: {
    aboutMe: 'One love',
    photos: {
      large: '1231231232',
      small: '123wwerwer',
    },
    fullName: 'The best',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
  },
  isFetching: false,
  status: "",
  isEdit: true,
}

const UPDATE_USER = 'profile/UPDATE_USER',
      TOOGLE_IS_FETCHING = 'profile/TOOGLE_IS_FETCHING',
      SET_STATUS = 'profile/SET_STATUS',
      ADD_IMAGE = 'image/ADD_IMAGE';

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
  } else if (action.type === ADD_IMAGE) {
    return {
      ...state,
      profile: {...state.profile, photos: action.photos},
    };
  };
  return state;
};

export const addImage = photo => {
  return {
    type: ADD_IMAGE,
    photo,
  };
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

export const getProfileThunkCreator = user => async (dispatch, getState) => {
  let userId = user;
  if (userId === undefined || userId === null) {
    userId = getState().auth.userId;
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

export const downloadPhotoThunkCreator = photo => async dispatch => {
  const response = await getData.getPhoto(photo);
  if (response.resultCode === 0) {
    dispatch(addImage(response.data.photos.large));
  } else {
    alert(response.messages[0]);
  };
  window.location.hash = '#/profile';
};


export default ProfileReducer;
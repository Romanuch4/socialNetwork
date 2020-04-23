import { getData } from '../../api/api';
import{stopSubmit} from 'redux-form';

const initialState = {
  person: {
    aboutMe: 'One love',
    photos: {
      large: '1231231232',
      small: '123wwerwer',
    },
    fullName: 'The best',
    contacts: {
      
    }
  },
  isFetching: false,
  status: "",
  isEdit: false,
}

const UPDATE_USER = 'profile/UPDATE_USER',
      TOOGLE_IS_FETCHING = 'profile/TOOGLE_IS_FETCHING',
      SET_STATUS = 'profile/SET_STATUS',
      ADD_IMAGE = 'profile/ADD_IMAGE',
      TOGGLE_IS_EDIT = 'profile/TOGGLE_IS_EDIT';

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
  } else if (action.type === TOGGLE_IS_EDIT) {
    return {
      ...state,
      isEdit: action.isEdit,
    };
  } 
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

export const toggleIsEdit = isEdit => {
  return {
    type: TOGGLE_IS_EDIT,
    isEdit,
  };
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

export const saveProfileThunkCreator = profile => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await getData.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
    //return Promise.reject(response.data.messages[0]);
  };
   
};

export const getProfileThunkCreator = user => async dispatch => {
  let userId = user;
  if (!userId) {
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
import {getData} from '../../api/api';

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
}

const ProfileReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE-USER') {
    return {
      ...state,
      person: action.person,
    };
  } else if (action.type === 'TOOGLE_IS_FETCHING') {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  };
  return state;
};

export const getUser = person => {
  return {
    type: 'UPDATE-USER',
    person,
  };
};

export const toogleIsFetching = isFetching => {
  return {
    type: 'TOOGLE_IS_FETCHING',
    isFetching,
  };
};

export const getProfileThunkCreator = user => dispatch => {
  let userId = user;
    if (userId === undefined) {
      userId = 2;
    }
    dispatch(toogleIsFetching(true));
    getData.getProfile(userId)
      .then(response => {
        dispatch(toogleIsFetching(false));
        dispatch(getUser(response));
      }
    );
};

export default ProfileReducer;
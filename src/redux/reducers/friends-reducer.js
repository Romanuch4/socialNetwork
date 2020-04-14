import { getData } from '../../api/api';

const initialState = {
  friends: [
    {
      id: 1, name: 'Roman', online: true, image: 'Roman.png', birthday: '24.2'
    },
    {
      id: 2, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '24.2'
    },
  ],
  isFetching: false,
  searchFriendsText: "",
  count: 2,
}

const UPDATE_FRIENDS_TEXTS = 'friends/UPDATE_FRIENDS_TEXTS',
  GET_FRIENDS = 'friends/GET_FRIENDS',
  TOOGLE_IS_FETCHING = 'friends/TOOGLE_IS_FETCHING',
  GET_START_FRIENDS = 'friends/GET_START_FRIENDS',
  CHANGE_COUNT = 'friends/CHANGE_COUNT';

const FriendsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_FRIENDS_TEXTS) {
    return {
      ...state,
      searchFriendsText: action.text,
    };

  } else if (action.type === GET_FRIENDS) {
    return {
      ...state,
      friends: [...state.friends, ...action.friends],
    };
  } else if (action.type === TOOGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === GET_START_FRIENDS) {
    return {
      ...state,
      friends: [...state.friends, ...action.friends],
    };
  } else if (action.type === CHANGE_COUNT) {
    count++;
    return {
      ...state,
      count,
    };
  };
  return state;
};

export const getFriends = items => {
  return {
    type: GET_FRIENDS,
    friends: [...items],
  };
};

let count = 0;
export const getStartFriends = items => {
  if (count > 0) {
    return {
      type: GET_START_FRIENDS,
      friends: [],
    };
  } else {
    count++;
    return {
      type: GET_START_FRIENDS,
      friends: [...items],
    };
  }
};

export const toogleIsFetching = isFetching => {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching,
  };
};

export const changeInputValues = text => {
  return {
    type: UPDATE_FRIENDS_TEXTS,
    text,
  };
};

export const changeCount = () => {
  return {
    type: CHANGE_COUNT,
    count: count++,
  };
};

export const getStartFriendsThunkCreator = () => async dispatch => {
  const response = await getData.getFriends(null);
  dispatch(getStartFriends(response.items));
};

export const getFriendsThunkCreator = count => async dispatch => {
  dispatch(toogleIsFetching(true));
  const response = await getData.getFriends(count);
  dispatch(toogleIsFetching(false));
  dispatch(getFriends(response.items));
  dispatch(changeCount());
};

export default FriendsReducer;
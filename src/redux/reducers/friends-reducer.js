const initialState = {
  friends: [
    {
      id: 1, name: 'Roman', online: true, image: 'Roman.png', birthday: '21.2'
    },
    {
      id: 2, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '21.2'
    },
  ],
  isFetching: false,
  searchFriendsText: "",
  count: 2,
}

const FriendsReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE-FRIENDS-TEXTS') {
    return {
      ...state,
      searchFriendsText: action.text,
    };

  } else if (action.type === 'GET-FRIENDS') {
    return {
      ...state,
      friends: [...state.friends, ...action.friends],
    };
  } else if (action.type === 'TOOGLE_IS_FETCHING') {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  } else if (action.type === 'GET-START-FRIENDS') {
    return {
      ...state,
      friends: [...state.friends, ...action.friends],
    };
  } else if (action.type === 'CHANGE-COUNT') {
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
    type: 'GET-FRIENDS',
    friends: [...items],
  };
};

let count = 0;
export const getStartFriends = items => {
  if (count > 0) {
    return {
      type: 'GET-FRIENDS',
      friends: [],
    };
  } else {
    count++;
    return {
      type: 'GET-FRIENDS',
      friends: [...items],
    };
  }
};

export const toogleIsFetching = isFetching => {
  return {
    type: 'TOOGLE_IS_FETCHING',
    isFetching,
  };
};

export const changeInputValues = text => {
  return {
    type: 'UPDATE-FRIENDS-TEXTS',
    text,
  };
};

export const changeCount = () => {
  return {
    type: 'CHANGE-COUNT',
    count: count++,
  };
};

export default FriendsReducer;
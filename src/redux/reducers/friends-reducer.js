const initialState = {
  friends: [
    {
      id: 0, name: 'Roman', online: true, image: 'Roman.png', birthday: '19.2'
    },
    {
      id: 1, name: 'Max', online: false, image: 'Max.jpg', birthday: '19.2'
    },
    {
      id: 2, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '19.2'
    },
    {
      id: 3, name: 'Roman1', online: false, image: 'Roman.png', birthday: '19.2'
    },
  ],
  isFetching: false,
  searchFriendsText: "",
}

const FriendsReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE-FRIENDS-TEXTS') {
    return {
      ...state,
      searchFriendsText: action.text,
    };
    
   } else if(action.type === 'GET-FRIENDS') {
    return {
      ...state,
      friends: [...state.friends, ...action.friends],
    };
   } else if(action.type === 'TOOGLE_IS_FETCHING') {
    return {
      ...state,
      isFetching: action.isFetching,
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

export const toogleIsFetching = isFetching => {
  return {
    type: 'TOOGLE_IS_FETCHING',
    isFetching,
  };
};

export const changeInputValues = text => {
  return {
    type: 'UPDATE-FRIENDS-TEXTS',
    text: text,
  };
};

export default FriendsReducer;
const initialState = {
  friends: [
    {
      id: 1, name: 'Roman', online: true, image: 'Roman.png', birthday: '9.2'
    },
    {
      id: 2, name: 'Max', online: false, image: 'Max.jpg', birthday: '9.2'
    },
    {
      id: 3, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '9.2'
    },
    {
      id: 4, name: 'Roman1', online: false, image: 'Roman.png', birthday: '10.2'
    },
    {
      id: 5, name: 'Max2', online: true, image: 'Max.jpg', birthday: '10.2'
    },
    {
      id: 6, name: 'Karina1', online: false, image: 'Karina.jpg', birthday: '10.2'
    },

    {
      id: 7, name: 'Roman2', online: true, image: 'Roman.png', birthday: '7.1'
    },
    {
      id: 8, name: 'Max2', online: false, image: 'Max.jpg', birthday: '13.4'
    },
    {
      id: 9, name: 'Karina2', online: true, image: 'Karina.jpg', birthday: '3.3'
    },
    {
      id: 10, name: 'Roman3', online: false, image: 'Roman.png', birthday: '5.2'
    },
    {
      id: 11, name: 'Max3', online: true, image: 'Max.jpg', birthday: '5.2'
    },
    {
      id: 12, name: 'Karina3', online: false, image: 'Karina.jpg', birthday: '5.2'
    },

    {
      id: 13, name: 'Roman4', online: true, image: 'Roman.png', birthday: '3.1'
    },
    {
      id: 14, name: 'Max4', online: false, image: 'Max.jpg', birthday: '3.4'
    },
    {
      id: 15, name: 'Karina4', online: true, image: 'Karina.jpg', birthday: '2.2'
    },
    {
      id: 16, name: 'Roman4', online: false, image: 'Roman.png', birthday: '2.2'
    },
    {
      id: 17, name: 'Max4', online: true, image: 'Max.jpg', birthday: '1.2'
    },
    {
      id: 18, name: 'Karina4', online: false, image: 'Karina.jpg', birthday: '1.1'
    },
  ],
  searchFriendsText: "",
}

const FriendsReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE-FRIENDS-TEXTS') {
    return {
      ...state,
      searchFriendsText: action.text,
    }
    /* state.searchFriendsText = action.text; */
  } 
    
  return state;
};

export default FriendsReducer;
const initialState = {
  person: {
    aboutMe: 'One love',
    photos: {
      large: '1231231232',
      small: '123wwerwer',
    },
    fullName: 'The best',
  },
}

const ProfileReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE-USER') {
    return {
      ...state,
      person: action.person,
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


export default ProfileReducer;
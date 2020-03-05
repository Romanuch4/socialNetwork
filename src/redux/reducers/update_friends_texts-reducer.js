const updateFriendsTextsReducer = (state, action) => {
  if(action.type === 'UPDATE-FRIENDS-TEXTS') {
    state.searchFriendsText = action.text;
  };

  return state;
};

export default updateFriendsTextsReducer;
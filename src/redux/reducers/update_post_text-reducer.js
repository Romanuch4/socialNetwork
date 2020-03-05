const updatePostTextReducer = (state, action) => {
  if(action.type === 'UPDATE-POST-TEXTS') {
    state.newPostText = action.text;
  };

  return state;
};

export default updatePostTextReducer;
const addPostReducer = (state, action) => {
  if (action.type === 'ADD-POSTS') {
    const newPost = {
      id: 3,
      text: action.text,
      date: new Date().toLocaleString(),
    };
    state.posts.push(newPost);
    state.newPostText = "";
  };
  return state;
};

export default addPostReducer;
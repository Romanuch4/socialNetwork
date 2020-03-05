const initialState = {
  posts: [
    {
      id: 1,
      text: 'Сегодня будет......',
      date: '15.02.2020, 21:29:59'/* new Date().toLocaleString() */,
    },

    {
      id: 2,
      text: '123',
      date: '05.02.2020, 21:29:59',
    },
  ],
  newPostText: "",
}

const PostReducer = (state = initialState, action) => {
  if (action.type === 'ADD-POSTS') {
    const newPost = {
      id: 3,
      text: action.text,
      date: new Date().toLocaleString(),
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if(action.type === 'UPDATE-POST-TEXTS') {
      state.newPostText = action.text;
  };
  return state;
};

export default PostReducer;
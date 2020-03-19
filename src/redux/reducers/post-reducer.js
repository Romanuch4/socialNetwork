const initialState = {
  posts: [
    {
      id: 0,
      text: 'Сегодня будет......',
      date: '15.02.2020, 21:29:59'/* new Date().toLocaleString() */,
    },

    {
      id: 1,
      text: '123',
      date: '05.02.2020, 21:29:59',
    },
  ],
  newPostText: "",
}

const PostReducer = (state = initialState, action) => {
  if (action.type === 'ADD-POSTS') {
    const newPost = {
      id: state.posts.length + 1,
      text: action.text,
      date: new Date().toLocaleString(),
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: "",
    };
  } else if(action.type === 'UPDATE-POST-TEXTS') {
    return {
      ...state,
      newPostText: action.text,
    };
  };
  return state;
};

export const addPosts = text => {
  return {
    type: 'ADD-POSTS',
    text: text,
  };
};

export const updatePostTexts = text => {
  return {
    type: 'UPDATE-POST-TEXTS',
    text: text,
  };
};

export default PostReducer;
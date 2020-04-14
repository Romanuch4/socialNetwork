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
}

const ADD_POSTS = 'post/ADD_POSTS';

const PostReducer = (state = initialState, action) => {
  if (action.type === ADD_POSTS) {
    const newPost = {
      id: state.posts.length + 1,
      text: action.text,
      date: new Date().toLocaleString(),
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  };
  return state;
};

export const addPosts = text => {
  return {
    type: ADD_POSTS,
    text,
  };
};

export default PostReducer;
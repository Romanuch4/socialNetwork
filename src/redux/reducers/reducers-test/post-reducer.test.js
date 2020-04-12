import PostReducer, { addPosts } from '../post-reducer';

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

it('posts should be more', () => {
  const action = addPosts("test");
  const newState = PostReducer(initialState, action);

  expect(newState.posts.length).toBe(3);
});

it('text must be correctly', () => {
  const action = addPosts("12356789");
  const newState = PostReducer(initialState, action);

  expect(newState.posts[2].text).toBe("12356789");
});
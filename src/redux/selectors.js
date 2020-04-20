export const getLogin = state => state.auth.login;

export const getIsAuth = state => state.auth.isAuth;

export const getInitialized = state => state.app.initialized;

export const getFriend = state => state.friends.friends;

export const getPosts = state => state.posts.posts;

export const getSearchFriendsText = state => state.friends.searchFriendsText;

export const getIsFetching = state => state.friends.isFetching;

export const getCount = state => state.friends.count;

export const getPerson = state => state.profile.person;

export const getStatus = state => state.profile.status;

export const getUserId = state => state.auth.userId;

export const getEvents = state => state.events;

export const getPhoto = state => state.profile.person.photos.large;
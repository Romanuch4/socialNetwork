import * as axios from 'axios';

const instanceRequest = axios.create({
  withCredentials: true,
  headers: {"API-KEY": "09833224-7372-4621-a073-a4512b30bb0d"},
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getData = {
  getUser() {
    return instanceRequest.get("auth/me")
    .then(response => response.data);
  },

  getFriends(count) {
    return instanceRequest.get(`users?count=10&page=${count}`)
    .then(response => response.data);
  },

  getProfile(userId) {
    return instanceRequest.get(`profile/${userId}`)
    .then(response => response.data);
  },

  getStatus(userId) {
    return instanceRequest.get(`profile/status/${userId}`)
    .then(response => response.data);
  },

  updateStatus(status) {
    return instanceRequest.put('profile/status/', {status})
  },

  login(email, password, rememberMe = false) {
    return instanceRequest.post('auth/login', {email, password, rememberMe});
  },

  logout() {
    return instanceRequest.delete('auth/login');
  },

  getPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instanceRequest.put('profile/photo', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
};
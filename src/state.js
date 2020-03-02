let rerenderEntireTree;

const Store = {
  _State: {
    friends: [
      {
        id: 1, name: 'Roman', online: true, image: 'Roman.png', birthday: '3.3'
      },
      {
        id: 2, name: 'Max', online: false, image: 'Max.jpg', birthday: '13.4'
      },
      {
        id: 3, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '1.2'
      },
      {
        id: 4, name: 'Roman1', online: false, image: 'Roman.png', birthday: '3.3'
      },
      {
        id: 5, name: 'Max2', online: true, image: 'Max.jpg', birthday: '8.2'
      },
      {
        id: 6, name: 'Karina1', online: false, image: 'Karina.jpg', birthday: '1.2'
      },

      {
        id: 7, name: 'Roman2', online: true, image: 'Roman.png', birthday: '7.1'
      },
      {
        id: 8, name: 'Max2', online: false, image: 'Max.jpg', birthday: '13.4'
      },
      {
        id: 9, name: 'Karina2', online: true, image: 'Karina.jpg', birthday: '3.3'
      },
      {
        id: 10, name: 'Roman3', online: false, image: 'Roman.png', birthday: '8.1'
      },
      {
        id: 11, name: 'Max3', online: true, image: 'Max.jpg', birthday: '8.2'
      },
      {
        id: 12, name: 'Karina3', online: false, image: 'Karina.jpg', birthday: '7.1'
      },

      {
        id: 13, name: 'Roman4', online: true, image: 'Roman.png', birthday: '3.1'
      },
      {
        id: 14, name: 'Max4', online: false, image: 'Max.jpg', birthday: '3.4'
      },
      {
        id: 15, name: 'Karina4', online: true, image: 'Karina.jpg', birthday: '2.2'
      },
      {
        id: 16, name: 'Roman4', online: false, image: 'Roman.png', birthday: '2.2'
      },
      {
        id: 17, name: 'Max4', online: true, image: 'Max.jpg', birthday: '1.2'
      },
      {
        id: 18, name: 'Karina4', online: false, image: 'Karina.jpg', birthday: '1.1'
      },
    ],

    posts: {
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
    },

    events: [
      {
        id: 0,
        title: 'Вечірка',
        date: 'В 20:00 по Киеву'
      },

      {
        id: 1,
        title: 'Вечірка 1',
        date: 'В 20:00 по Киеву'
      },

      {
        id: 2,
        title: 'Вечірка 2',
        date: 'В 20:00 по Киеву'
      },

      {
        id: 3,
        title: 'Вечірка 3',
        date: 'В 20:00 по Киеву'
      },

      {
        id: 4,
        title: 'Вечірка 4',
        date: 'В 20:00 по Киеву'
      },
    ],

    searchFriendsText: "",
  },

  dispatch(action) {
    if(action.type === 'ADD-POSTS') {
      const newPost = {
        id: 3,
        text: action.text,
        date: new Date().toLocaleString(),
      };
      this._State.posts.posts.push(newPost);
      rerenderEntireTree(Store);
      this._State.posts.newPostText = "";
    } 

    else if(action.type === 'UPDATE-POST-TEXTS') {
      this._State.posts.newPostText = action.text;
      rerenderEntireTree(Store);
    } 

    else if(action.type === 'UPDATE-FRIENDS-TEXTS') {
      this._State.searchFriendsText = action.text;
      rerenderEntireTree(Store);
    } 

    else if(action.type === 'DELETE-EVENTS') {
      for(let i = 0; i < this._State.events.length; i++) {
        if(this._State.events[i].title === action.text) {
          this._State.events.splice(i,1);
        };
      };
      rerenderEntireTree(Store);
    }
  },

  getState() {
    return this._State;
  }
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
} 

export default Store;
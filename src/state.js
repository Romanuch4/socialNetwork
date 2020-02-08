const Store = {
  _State: {
    friends: [
      {
        id: 1, name: 'Roman', online: true, image: 'Roman.png', birthday: '7.1.2002'
      },
      {
        id: 2, name: 'Max', online: false, image: 'Max.jpg', birthday: '13.4.2000'
      },
      {
        id: 3, name: 'Karina', online: true, image: 'Karina.jpg', birthday: '14.5.2002'
      },
      {
        id: 4, name: 'Roman1', online: false, image: 'Roman.png', birthday: '8.1.1998'
      },
      {
        id: 5, name: 'Max2', online: true, image: 'Max.jpg', birthday: '8.2.2002'
      },
      {
        id: 6, name: 'Karina1', online: false, image: 'Karina.jpg', birthday: '7.1.2002'
      },
    ],
  },

  getState() {
    return this._State;
  }
};

export default Store;
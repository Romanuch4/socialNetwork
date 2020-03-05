const initialState = {
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
}

const deleteEventsReducer = (state = initialState, action) => {
  if(action.type === 'DELETE-EVENTS') {
    for(let i = 0; i < state.events.length; i++) {
      if(state.events[i].title === action.text) {
        state.events.splice(i,1);
      };
    };
  };

  return state;
};

export default deleteEventsReducer;
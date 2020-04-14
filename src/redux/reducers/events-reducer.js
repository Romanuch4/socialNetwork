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
};

const DELETE_EVENTS = 'events/DELETE_EVENTS';

const EventsReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  if(action.type === DELETE_EVENTS) {
    for(let i = 0; i < stateCopy.events.length; i++) {
      if(stateCopy.events[i].title === action.text) {
        stateCopy.events.splice(i,1);
      };
    };
    return stateCopy;
  };

  return state;
};

export const deleteEvents = text => {
  return {
    type: DELETE_EVENTS,
    text: text,
  }
};

export default EventsReducer;
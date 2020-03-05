const deleteEventsReducer = (state, action) => {
  if(action.type === 'DELETE-EVENTS') {
    for(let i = 0; i < state.length; i++) {
      if(state[i].title === action.text) {
        state.splice(i,1);
      };
    };
  };

  return state;
};

export default deleteEventsReducer;
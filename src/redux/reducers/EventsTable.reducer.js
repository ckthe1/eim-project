
const Events = (state = [], action) => {
  switch (action.type) {

    case 'SET_TABLE_EVENTS': return action.payload;

    default: return state;
  }
};

export default Events;
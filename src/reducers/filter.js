// const initialState = { filter: 'All' };
const filterReducer = (state = 'All', action) => {
  const { type } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;

const filterReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;

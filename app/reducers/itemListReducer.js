const defaultState = {
  items: [],
  error: null
};

const itemListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      state = {
        ...state,
        items: action.items
      };
      break;
    case 'FETCH_ITEMS_FAILED':
      state = {
        ...state,
        error: action.error
      };
      break;
    default:
      break;
  }
  return state;
};

export default itemListReducer;

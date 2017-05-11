import itemListReducer from './itemListReducer';

const listedItems = [
  {
    name: 'apples',
    label: 'Apples',
    price: 0.25
  }, {
    name: 'oranges',
    label: 'Oranges',
    price: 0.30
  }
];

const fetchItemsSuccessAction = {
  type: 'FETCH_ITEMS_SUCCESS',
  items: listedItems
};

const fetchItemsFailedAction = {
  type: 'FETCH_ITEMS_FAILED',
  error: "Error"
};

describe('Item list reducer', () => {
  it('should add fetched items to the list', () => {

    const previousState = {
      items: [],
      error: null
    };

    const nextState = {
      items: listedItems,
      error: null
    };

    const state = itemListReducer(previousState, fetchItemsSuccessAction);

    expect(state).toEqual(nextState);
  });

  it('should store an error when it occurs fetching items', () => {

    const previousState = {
      items: [],
      error: null
    };

    const nextState = {
      items: [],
      error: "Error"
    };

    const state = itemListReducer(previousState, fetchItemsFailedAction);

    expect(state).toEqual(nextState);
  });

});

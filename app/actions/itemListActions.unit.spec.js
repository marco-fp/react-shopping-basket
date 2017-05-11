import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as itemListActions from './itemListActions';


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const axiosMock = new MockAdapter(axios);
const mockItems = [
  {
    name: 'apples',
    label: 'Apples',
    price: 0.25
  }, {
    name: 'oranges',
    label: 'Oranges',
    price: 0.30
  }, {
    name: 'bananas',
    label: 'Bananas',
    price: 0.15
  }, {
    name: 'papayas',
    label: 'Papayas',
    price: 0.50
  }
];

const defaultState = { items: [], error: null };

describe('itemListActions', () => {

  beforeEach(() => {
    axiosMock.reset();
  });

  it('should fetch all items from API', () => {
    axiosMock.onGet('www.awesomeshop.ch/api/shopping_items').reply(200, mockItems);
    const expectedActions = [
      { type: 'FETCH_ITEMS_REQUEST' },
      { type: 'FETCH_ITEMS_SUCCESS', items: mockItems }
    ];

    const store = mockStore(defaultState);

    return store.dispatch(itemListActions.fetchItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should store an error if it occurs when fetching items from API', () => {
    axiosMock.onGet('www.awesomeshop.ch/api/shopping_items').reply(403, 'Forbidden');
    const expectedActions = [
      { type: 'FETCH_ITEMS_REQUEST' },
      { type: 'FETCH_ITEMS_FAILED', error: 'Forbidden' }
    ];

    const store = mockStore(defaultState);

    return store.dispatch(itemListActions.fetchItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});

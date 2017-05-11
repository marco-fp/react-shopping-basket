import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import asyncFetchItems from './asyncFetchItems';

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
  }
];

describe('asyncFetchItems', () => {
  beforeEach(() => {
    axiosMock.reset();
  });

  it('should fetch items from API', () => {
    axiosMock.onGet('www.awesomeshop.ch/api/shopping_items').reply(200, mockItems);
    asyncFetchItems().then((response) =>{
      expect(response.data).toEqual(mockItems);
    });
  });
});

import axios from 'axios';

/* Mocking server's response */

import MockAdapter from 'axios-mock-adapter';

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

const asyncFetchItems = async () => {
  axiosMock.onGet('www.awesomeshop.ch/api/shopping_items').reply(200, mockItems);

  try {
    return await axios.get('www.awesomeshop.ch/api/shopping_items');
  } catch (error) {
    switch (error.response.status) {
      case 403:
        return 'Forbidden';
        break;
      case 500:
        return 'Server error';
        break;
      default:
        return "Error";
        break;
    }
  }
}

export default asyncFetchItems;

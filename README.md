# Shopping Basket in React.js (Redux)
by *Marco Fernández Pranno*

Implementation of a basic shopping basket, allows to add and remove items from a list.  

Mocks the behavior of fetching the items from an API endpoint and provides a general and extensible approach for applying offers to item's prices.

*React: `15.5.4` | Redux: `3.6.0` | Webpack: `2.5.1`*

## Installation

From the root directory, type: `npm install` in a terminal.

## Testing
*Jest: `20.0.0`*  

To run the test use: `npm test`  
To allow tests to run over modified files: `npm run test:watch`  
To display test coverage: `npm run test:coverage`  

__Coverage__  
```
---------------------------|----------|----------|----------|----------|----------------|
File                       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------------|----------|----------|----------|----------|----------------|
All files                  |    90.41 |       76 |      100 |    90.41 |                |
 actions                   |      100 |      100 |      100 |      100 |                |
  itemListActions.js       |      100 |      100 |      100 |      100 |                |
 api                       |    61.54 |    33.33 |      100 |    61.54 |                |
  asyncFetchItems.js       |    61.54 |    33.33 |      100 |    61.54 | 37,39,40,42,43 |
 reducers                  |    94.12 |       75 |      100 |    94.12 |                |
  itemListReducer.js       |    88.89 |       50 |      100 |    88.89 |             21 |
  shoppingBasketReducer.js |       96 |    83.33 |      100 |       96 |             79 |
 utils                     |      100 |      100 |      100 |      100 |                |
  applyOffer.js            |      100 |      100 |      100 |      100 |                |
  calculateTotalPrice.js   |      100 |      100 |      100 |      100 |                |
---------------------------|----------|----------|----------|----------|----------------|
```

## Usage

To run the dev-server: `npm start`  
Open a browser and go to: `http://localhost:3000/`  

## Implementation

By using Redux, application's state is represented in a single object; the `store`.
`Actions` are dispatched in order to change it's state and the `reducers` act depending on those actions by mutating the store.  
Those components that render a changed part of the store are re-rendered to display the new state.  

`Babel` is used for transpiling JSX (ES6) to JS (ES5), along different packages (see _webpack.config.js_ file) for SCSS to CSS.  

`Webpack` is used for applying the previous packages over the files and bundle them together.

__Components__
- Shop:  
  Main component that wraps ItemList and ShoppingBasket

- ShoppingBasket:  
  Displays the total price of the basket and the items added to it, along with its amount and offers that may apply to them.  
  Allows the removal of items by displaying a "REMOVE" button.

- ItemList:   
  Displays the existing items, along with their price and name.  
  Allows the addition of items to the basket by displaying an "ADD button."

- Item:  
  Stateless component that displays the information regarding the item, both on ItemList and ShoppingBasket. Behaves accordingly to the properties passed, in order to represent to be listed or added to the basket.

__Store description__

```
state: {
  shoppingBasket: {
    addedItems: {
      addedItemExample: {
        name: 'itemName',   // Used for identifying the items
        label: 'Item Name', // Displayed as name for the user view
        price: 0.5,         // Individual price of the item
        amount: 10,         // Amount of items of that kind added to the basket
        totalPrice: 5,      // Price of all items of that kind, with offers applied
        appliedOffer: {     // Offer applied to the item kind
          reduced: 0,       // Price reduced by the offer
          name: 'offerName'
        }
      }
    },
    activeOffers: {
      itemName: {           // Name of item kind affected by the offer
        offerName: 'offerName' // Used to identify the offers
      }
    },
    basketTotalPrice: 0     // Sum of all items prices with offers applied
  },
  itemList: {
    items: {
      listedItemExample: {
        name: 'itemName',   // Used for identifying the items
        label: 'Item Name', // Displayed as name for the user view
        price: 0.5          // Individual price of the item
      }
    },
    error: '' // For storing an error on fetching from the API
  }
}
```

__Offers__

Offers are implemented as an object that contains the offer's name and a function. These functions input the amount of items of a designated category and it's price, and output the reduced total price of the items along with information regarding the offer.  

```
function offerFunction(itemAmount, itemPrice) {
  // [Magic happens]
  return {
    totalPrice,
    appliedOffer: {
      name,
      reduced // Price reduced by the offer on the items cost.
    }
  }
}
```

__"Fetching" Items__

ItemList fetches the items by an asynchronous call, mocked to represent the answer from a server's API endpoint. For doing this `axios` and `axios-mock-adapter` packages are used.

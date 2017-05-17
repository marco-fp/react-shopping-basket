import calculateTotalPrice from '../utils/calculateTotalPrice';

const defaultState = {
  addedItems: {},
  activeOffers: {
    papayas: {
      offerName: '3x2'
    },
    apples: {
      offerName: '50%'
    }
  },
  basketTotalPrice: 0
};

const shoppingBasketReducer = (state = defaultState, action) => {
  let basketTotalPrice;
  switch (action.type) {
    case 'ADD_ITEM_TO_BASKET':
      const addedItem = state.addedItems[action.item.name] || action.item;
      const amount = addedItem.amount ? addedItem.amount + 1 : 1;

      basketTotalPrice = state.basketTotalPrice - (addedItem.totalPrice || 0);

      const itemOffer = state.activeOffers[addedItem.name];
      const priceResult = calculateTotalPrice(itemOffer, amount, addedItem.price);

      basketTotalPrice += priceResult.totalPrice;

      state = {
        ...state,
        addedItems: {
          ...state.addedItems,
          [action.item.name]: {
            ...addedItem,
            ...priceResult,
            amount
          }
        },
        basketTotalPrice
      };
      break;
    case 'REMOVE_ITEM_FROM_BASKET':
      const removedItem = state.addedItems[action.item.name];
      basketTotalPrice = state.basketTotalPrice - removedItem.totalPrice;

      if (removedItem.amount > 1) {
        const amount = removedItem.amount - 1;
        const itemOffer = state.activeOffers[removedItem.name];

        const priceResult = calculateTotalPrice(itemOffer, amount, removedItem.price);

        basketTotalPrice += priceResult.totalPrice

        state = {
          ...state,
          addedItems: {
            ...state.addedItems,
            [action.item.name]: {
              ...removedItem,
              ...priceResult,
              amount
            }
          },
          basketTotalPrice
        };
      } else {
        const addedItems = {
          ...state.addedItems
        };

        delete addedItems[action.item.name];

        state = {
          ...state,
          addedItems,
          basketTotalPrice
        };
      }
      break;
    default:
      break;

  }
  return state;
};

export default shoppingBasketReducer;

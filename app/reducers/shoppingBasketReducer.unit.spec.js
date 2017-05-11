import shoppingBasketReducer from './shoppingBasketReducer';

const applesItem = {
  name: 'apples',
  label: 'Apples',
  price: 0.25
};

const papayasItem = {
  name: 'papayas',
  label: 'Papayas',
  price: 0.50
};

const addAppleItemAction = {
  type: 'ADD_ITEM_TO_BASKET',
  item: applesItem
};

const addPapayaItemAction = {
  type: 'ADD_ITEM_TO_BASKET',
  item: papayasItem
}

const removePapayaItemAction = {
  type: 'REMOVE_ITEM_FROM_BASKET',
  item: papayasItem
}

const removeItemAction = {
  type: 'REMOVE_ITEM_FROM_BASKET',
  item: applesItem
};

describe('Shopping basket reducer', () => {
  it('should add a new Item to the shopping basket', () => {
    const previousState = {
      basketTotalPrice: 0,
      activeOffers: {},
      addedItems: {}
    };

    const nextState = {
      activeOffers: {},
      basketTotalPrice: 0.25,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 1,
          totalPrice: 0.25
        }
      }
    };

    const state = shoppingBasketReducer(previousState, addAppleItemAction);

    expect(state).toEqual(nextState);
  });

  it('should add an existing Item to the shopping basket', () => {
    const previousState = {
      activeOffers: {},
      basketTotalPrice: 0.25,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 1,
          totalPrice: 0.25
        }
      }
    }

    const nextState = {
      activeOffers: {},
      basketTotalPrice: 0.5,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 2,
          totalPrice: 0.5
        }
      }
    }

    const state = shoppingBasketReducer(previousState, addAppleItemAction);

    expect(state).toEqual(nextState);
  });

  it('should apply offers to Item prices when adding them to the shopping basket', () => {
    const previousState = {
      basketTotalPrice: 1,
      activeOffers: {
        papayas: {
          offerName: '3x2'
        }
      },
      addedItems: {
        "papayas": {
          name: 'papayas',
          label: 'Papayas',
          price: 0.5,
          amount: 2,
          totalPrice: 1
        }
      }
    };

    const nextState = {
      basketTotalPrice: 1,
      activeOffers: {
        papayas: {
          offerName: '3x2'
        }
      },
      addedItems: {
        "papayas": {
          name: 'papayas',
          label: 'Papayas',
          price: 0.5,
          amount: 3,
          totalPrice: 1,
          appliedOffer: {
            name: '3x2',
            reduced: 0.5
          }
        }
      }
    };

    const state = shoppingBasketReducer(previousState, addPapayaItemAction);

    expect(state).toEqual(nextState);
  });

  it('should apply offers to Item prices when removing them of the shopping basket', () => {
    const previousState = {
      basketTotalPrice: 1,
      activeOffers: {
        papayas: {
          offerName: '3x2'
        }
      },
      addedItems: {
        "papayas": {
          name: 'papayas',
          label: 'Papayas',
          price: 0.5,
          amount: 3,
          totalPrice: 1,
          appliedOffer: {
            name: '3x2',
            reduced: 0.5
          }
        }
      }
    };

    const nextState = {
      basketTotalPrice: 1,
      activeOffers: {
        papayas: {
          offerName: '3x2'
        }
      },
      addedItems: {
        "papayas": {
          name: 'papayas',
          label: 'Papayas',
          price: 0.5,
          amount: 2,
          totalPrice: 1
        }
      }
    };

    const state = shoppingBasketReducer(previousState, removePapayaItemAction);

    expect(state).toEqual(nextState);
  });


  it('should remove an Item of the shopping basket, reducing its amount by 1', () => {
    const previousState = {
      activeOffers: {},
      basketTotalPrice: 0.5,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 2,
          totalPrice: 0.5
        }
      }
    }

    const nextState = {
      activeOffers: {},
      basketTotalPrice: 0.25,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 1,
          totalPrice: 0.25
        }
      }
    };

    const state = shoppingBasketReducer(previousState, removeItemAction);

    expect(state).toEqual(nextState);
  });

  it('should remove an Item of the shopping basket completely', () => {
    const previousState = {
      activeOffers: {},
      basketTotalPrice: 0.25,
      addedItems: {
        "apples": {
          name: 'apples',
          label: 'Apples',
          price: 0.25,
          amount: 1,
          totalPrice: 0.25
        }
      }
    }

    const nextState = {
      basketTotalPrice: 0,
      activeOffers: {},
      addedItems: {}
    };

    const state = shoppingBasketReducer(previousState, removeItemAction);

    expect(state).toEqual(nextState);
  });

});

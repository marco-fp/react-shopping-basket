export const addItemToBasket = (item) => {
  return {
    type: 'ADD_ITEM_TO_BASKET',
    item
  };
};

export const removeItemFromBasket = (item) => {
  return {
    type: 'REMOVE_ITEM_FROM_BASKET',
    item
  };
};

const threeForTwoOffer = (itemAmount, itemPrice) => {
  const freeItems = Math.floor(itemAmount/3);
  const reduced = freeItems * itemPrice;
  const totalPrice = (itemAmount * itemPrice) - reduced;
  const appliedOffer = reduced ? { reduced, name: '3x2' } : undefined;
  return { totalPrice, appliedOffer };
};

const offers = {
  '3x2': {
    apply: threeForTwoOffer
  }
};

const applyOffer = (offerName, itemAmount, itemPrice) => {
  return offers[offerName].apply(itemAmount, itemPrice);
}

export default applyOffer;

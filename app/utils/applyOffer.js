const threeForTwoOffer = (itemAmount, itemPrice) => {
  const freeItems = Math.floor(itemAmount/3);
  const reduced = freeItems * itemPrice;
  const totalPrice = (itemAmount * itemPrice) - reduced;
  const appliedOffer = reduced ? { reduced, name: '3x2' } : undefined;
  return { totalPrice, appliedOffer };
};

const fiftyPercent = (itemAmount, itemPrice) => {
  const totalPrice = itemAmount*itemPrice*0.5;
  const appliedOffer = { reduced: totalPrice, name: '50%' };
  return { totalPrice, appliedOffer };
};

const offers = {
  '3x2': {
    apply: threeForTwoOffer
  },
  '50%': {
    apply: fiftyPercent
  }
};

const applyOffer = (offerName, itemAmount, itemPrice) => {
  return offers[offerName].apply(itemAmount, itemPrice);
}

export default applyOffer;

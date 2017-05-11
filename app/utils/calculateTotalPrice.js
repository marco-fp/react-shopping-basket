import applyOffer from './applyOffer';

const calculateTotalPrice = (itemOffer, itemAmount, itemPrice) => {
  if(itemOffer){
    return applyOffer(itemOffer.offerName, itemAmount, itemPrice);
  } else {
    return { totalPrice: itemAmount * itemPrice };
  }
};

export default calculateTotalPrice;

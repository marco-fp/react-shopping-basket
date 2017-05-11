import React from 'react';

const Item = (props) => {
  const {
    actionCallback, buttonLabel,
    showPrice, data
  } = props;

  const {
    amount, label,
    price, totalPrice,
    appliedOffer
  } = data;

  return (
    <tr className="item">
      { amount > 0 && (<td>{ amount }</td>) }
      <td>{ label }</td>
      <td>{ price }</td>
      <td>{ actionCallback && <button onClick={() => actionCallback(data)}>{ buttonLabel }</button> }</td>
      { totalPrice && (<td>{ totalPrice.toFixed(2) }</td>) }
      { appliedOffer && (<td>-{ appliedOffer.reduced } ( { appliedOffer.name } offer )</td>)}
    </tr>
  )
};

export default Item;

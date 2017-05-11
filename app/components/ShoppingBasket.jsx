import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item.jsx';
import { removeItemFromBasket } from '../actions/shoppingBasketActions';

class ShoppingBasket extends React.Component {
  render() {
    const { addedItems, removeItemFromBasket, basketTotalPrice } = this.props;
    return (
      <div className="shopping-basket">
      <br/>
        <h4 className="title">BASKET</h4>

        <div className="shopping-basket-total-price">
          Total basket price: {basketTotalPrice.toFixed(2)}
        </div>

        <table>
          <thead>
            <tr>
              <th> Amount </th>
              <th> Name </th>
              <th> Item price </th>
              <th> Action </th>
              <th> Total price </th>
          </tr>
          </thead>
          <tbody>
            { Object.keys(addedItems).map((itemName) => {
              const item = addedItems[itemName];
              return(
                <Item
                  data={item}
                  key={"added-"+item.name}
                  actionCallback={removeItemFromBasket}
                  buttonLabel={"REMOVE"}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    addedItems: state.shoppingBasket.addedItems,
    basketTotalPrice: state.shoppingBasket.basketTotalPrice
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeItemFromBasket
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);

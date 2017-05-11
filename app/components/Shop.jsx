import React from 'react';
import ItemList from './ItemList.jsx';
import ShoppingBasket from './ShoppingBasket.jsx';

class Shop extends React.Component {
  render() {
    return (
      <div className="shop">
        <h1 className="shop-title">React Shop</h1>
        <ItemList />
        <ShoppingBasket />
      </div>
    );
  }
};

export default Shop;

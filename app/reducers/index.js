import { combineReducers } from 'redux';
import shoppingBasket from './shoppingBasketReducer';
import itemList from './itemListReducer';

const shopReducers =  combineReducers({
  shoppingBasket,
  itemList
});

export default shopReducers;

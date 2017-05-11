import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item.jsx';
import { addItemToBasket } from '../actions/shoppingBasketActions';
import { fetchItems } from '../actions/itemListActions';

class ItemList extends React.Component {

  constructor(props){
    super(props);
    if(props.items.length === 0) {
      props.fetchItems();
    }
  }

  render() {
    const { items, addItemToBasket, error } = this.props;
    return (
      <div className="item-list">
        <h4 className="title">ITEM LIST</h4>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Price </th>
              <th> Action </th>
          </tr>
          </thead>
          <tbody>
          { items.map((item) => {
              return (
                  <Item
                    data={item}
                    key={item.name}
                    actionCallback={addItemToBasket}
                    buttonLabel={"ADD"}
                  />
              );
          })}
        </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.itemList.items,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItemToBasket,
    fetchItems
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

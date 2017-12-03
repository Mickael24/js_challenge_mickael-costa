import { connect } from 'react-redux';
import React, { Component } from 'react'
import { getProducts } from '../actions/products';
import { addToBag, addToBagWhish, removeToBag, removeToBagWhish } from '../actions/bag';
import Products from '../components/Products-list';
import HeaderShooping from '../components/Header-page';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.products,
    bag: state.bag
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: () => { dispatch(getProducts()) },
    addToBag: (product) => { dispatch(addToBag(product)) },
    addToWhishList: (product) => { dispatch(addToBagWhish(product)) },
    removeToBag: (product) => { dispatch(removeToBag(product)) },
    removeToWhishList: (product) => { dispatch(removeToBagWhish(product)) }
  };
}

class ShoppingContainer extends Component {
  render() {
    return (
      <div>
        <HeaderShooping bag_price = {this.props.bag.bag_price } bag={this.props.bag.bag_products} whishlist={this.props.bag.whish_list_products} />
        <Products list={this.props.list}
          getProducts={this.props.getProducts}
          addToBag={this.props.addToBag}
          addToWhishList={this.props.addToWhishList}
          removeToBag = {this.props.removeToBag}
          removeToWhishList = {this.props.removeToWhishList }>
        </Products>
      </div>
    );
  }
}


const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingContainer)

export default container;
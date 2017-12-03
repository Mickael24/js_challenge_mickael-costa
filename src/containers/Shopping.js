import { connect } from 'react-redux';
import React, { Component } from 'react'
import { getProducts } from '../actions/products';
import Products from '../components/products-list';
import HeaderShooping from '../components/header-page';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.products
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: () => { dispatch(getProducts()) }
  };
}

class ShoppingContainer extends Component {
  render() {
    return (
      <div>
        <HeaderShooping />
        <Products list = { this.props.list } getProducts = {this.props.getProducts}></Products>
      </div>
    );
  }
}


const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingContainer)

export default container;
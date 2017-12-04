import { connect } from 'react-redux';
import React, { Component } from 'react'
import { getProducts, moreProducts } from '../actions/products';
import { addToBag, addToBagWhish, removeToBag, removeToBagWhish } from '../actions/bag';
import ProductsList from '../components/ProductsList';
import HeaderShooping from '../components/HeaderPage';
import Pagination from '../components/PaginationPage';
import { getElementsByList } from '../reducers/products.js';

const getNumberOfPages = (list, numberPerPage) => {
    return Math.ceil(list.length / numberPerPage);
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: getElementsByList(state),
    bag: state.bag,
    paginationCount: getNumberOfPages(state.products.products, 6)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: (skip, batch) => { dispatch(getProducts()) },
    addToBag: (product) => { dispatch(addToBag(product)) },
    addToWhishList: (product) => { dispatch(addToBagWhish(product)) },
    removeToBag: (product) => { dispatch(removeToBag(product)) },
    removeToWhishList: (product) => { dispatch(removeToBagWhish(product)) },
    updateProductsByPage: (skip, batch) => { dispatch(moreProducts(skip, batch)) },
  };
}

class ShoppingContainer extends Component {
  render() {
    return (
      <div>
        <HeaderShooping bagPrice = { this.props.bag.price } bag={this.props.bag.products} whishList={this.props.bag.whishList} />
        <main className="product-page">>
        <ProductsList products={this.props.products}
          getProducts={this.props.getProducts}
          addToBag={this.props.addToBag}
          addToWhishList={this.props.addToWhishList}
          removeToBag = {this.props.removeToBag}
          removeToWhishList = {this.props.removeToWhishList }>
        </ProductsList>
        <Pagination paginationCount = {this.props.paginationCount} updateProductsByPage= {this.props.updateProductsByPage}/>
      </main>
    </div>
    );
  }
}


const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingContainer)

export default container;
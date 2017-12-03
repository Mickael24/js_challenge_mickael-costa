import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import Products from '../components/products-list';

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

const ShoppingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ShoppingContainer;
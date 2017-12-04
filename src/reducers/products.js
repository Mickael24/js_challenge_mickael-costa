import { ADDPRODUCTS, GETPRODUCTS, MOREPRODUCTS } from '../actions/products'
import { createSelector } from 'reselect'

const initialState = {
  skip: 0,
  batch: 6,
  products: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADDPRODUCTS:
      return { 
        ... state,
        products: action.products 
      };

    case GETPRODUCTS:
      return {
        ...state,
        products: state.products
      };

    case MOREPRODUCTS:
      return {
        ...state,
        skip: action.skip,
        batch: action.batch
      };

    default:
      return state;
  }
}

const productsSelector = state => state.products;
const sliceProductsSelector = state => { return { skip: state.products.skip, batch: state.products.batch } }

export const getElementsByList = createSelector(
  productsSelector,
  sliceProductsSelector,
  (items, options) =>  items.products.slice(options.skip, options.batch)
)
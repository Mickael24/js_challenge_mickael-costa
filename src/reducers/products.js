import { ADDPRODUCTS, GETPRODUCTS } from '../actions/products'


const initialState = {
  products: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case ADDPRODUCTS:
      return { products: action.products };
    
    case GETPRODUCTS:
      return { products: state.products || [] };

    default:
      return state;
  }
}
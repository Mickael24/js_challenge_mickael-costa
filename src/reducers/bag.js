import Actions from '../actions/bag'
import _ from 'lodash'

const initialState = {
  price: 0,
  products: [],
  whishList: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case Actions.ADD_TO_BAG:
      return {
        ...state,
        price: addPrice(state.price, action.product),
        products: add(state.products, action.product)
      };

    case Actions.ADD_TO_WHISH_LIST:
      return {
        ...state,
        whishList: add(state.whishList, action.product)
      };

    case Actions.REMOVE_TO_BAG:
      return {
        ...state,
        price: removePrice(state.price, action.product),
        products: remove(state.products, action.product)
      };

    case Actions.REMOVE_WHISH_LIST:
      return {
        ...state,
        whishList: remove(state.whishList, action.product)
      };

    default:
      return state;
  }
}

function add(list = [], product) {
  list.push(product);
  return list;
}

function remove(list , product) {
  _.remove(list, (element) => {
    return element.id === product.id;
  });
  return list;
}

function addPrice(price, product) {
  price = parseInt(price);
  return product.priceDiscounted ? price + parseInt(product.priceDiscounted): price + parseInt(product.price);
}

function removePrice(price, product) {
  price = parseInt(price);
  return product.priceDiscounted ? price - parseInt(product.priceDiscounted): price - parseInt(product.price);
}
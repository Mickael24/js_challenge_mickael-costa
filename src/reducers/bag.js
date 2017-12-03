import Actions from '../actions/bag'
import _ from 'lodash';

const initialState = {
  bag_price: 0,
  bag_products: [],
  whish_list_products: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case Actions.ADD_TO_BAG:
      return {
        ...state,
        bag_price: addPrice(state.bag_price, action.product),
        bag_products: add(state.bag_products, action.product)
      };

    case Actions.ADD_TO_WHISH_LIST:
      return {
        ...state,
        whish_list_products: add(state.whish_list_products, action.product)
      };

    case Actions.REMOVE_TO_BAG:
      return {
        ...state,
        bag_price: removePrice(state.bag_price, action.product),
        bag_products: remove(state.bag_products, action.product)
      };

    case Actions.REMOVE_WHISH_LIST:
      return {
        ...state,
        whish_list_products: remove(state.whish_list_products, action.product)
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
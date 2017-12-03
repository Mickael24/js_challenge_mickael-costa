export const ADD_TO_BAG = 'ADDTOBAG';
export const REMOVE_TO_BAG = 'REMOVE_TO_BAG';

export const ADD_TO_WHISH_LIST = 'ADD_TO_WHISH_LIST';
export const REMOVE_WHISH_LIST = 'REMOVE_WHISH_LIST';

export const addToBag = (product) => {
  product.inOrder = true;
  return {
    type: ADD_TO_BAG,
    product
  }
}

export const removeToBag = (product) => {
  product.inOrder = false;
  return {
    type: REMOVE_TO_BAG,
    product
  }
}

export const addToBagWhish = (product) => {
  product.inWhishList = true;
  return {
    type: ADD_TO_WHISH_LIST,
    product
  }
}

export const removeToBagWhish = (product) => {
  product.inWhishList = false;
  return {
    type: REMOVE_WHISH_LIST,
    product
  }
}

const Actions = {
  ADD_TO_BAG,
  REMOVE_TO_BAG,
  ADD_TO_WHISH_LIST,
  REMOVE_WHISH_LIST
}

export default Actions;
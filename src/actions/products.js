export const ADDPRODUCTS = 'ADDPRODUCTS';
export const GETPRODUCTS = 'GETPRODUCTS';

export const addProducts = (products) => {
  return {
    type: ADDPRODUCTS,
    products
  }
}

export const getProducts = () => {
  return {
    type: GETPRODUCTS,
  }
}
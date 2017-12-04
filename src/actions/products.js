export const ADDPRODUCTS = 'ADDPRODUCTS';
export const GETPRODUCTS = 'GETPRODUCTS';
export const MOREPRODUCTS = 'MOREPRODUCTS';


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

export const moreProducts = (skip, batch) => {
  return {
    type: MOREPRODUCTS,
    skip,
    batch
  }
}
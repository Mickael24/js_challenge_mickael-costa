import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product.js'
import '../styles/Products.css'

class ProductsList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <section>
        <div className="product-list">
          {this.props.products.map((product) =>
            <Product element={product} key={product.id}
              addToBag={this.props.addToBag}
              addToWhishList={this.props.addToWhishList}
              removeToBag={this.props.removeToBag}
              removeToWhishList={this.props.removeToWhishList} />
          )}
        </div>
      </section>
    )
  }
}

ProductsList.propTypes = {
  addToBag: PropTypes.func.isRequired,
  addToWhishList: PropTypes.func.isRequired,
  removeToBag: PropTypes.func.isRequired,
  removeToWhishList: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductsList
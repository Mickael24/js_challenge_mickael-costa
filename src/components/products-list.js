import React, { Component } from 'react'
import Product from './Product.js';
import '../styles/Products.css';

class Products extends Component {

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
          {this.props.list.products.map((product) =>
            <Product element={product} key={product.id}
             addToBag={this.props.addToBag}
             addToWhishList = {this.props.addToWhishList }
             removeToBag= {this.props.removeToBag}
             removeToWhishList = {this.props.removeToWhishList }/>
          )}
        </div>
      </section>
    )
  }
}

export default Products
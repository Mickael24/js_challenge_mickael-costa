import React, { Component } from 'react'
import Product from './product.js';
import '../styles/Products.css';

class Products extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    return (
      <section>
        <div className="product-list">
          {this.props.list.products.map((product) => <Product element= {product} key={product.id}/>)}
        </div>
      </section>
    )
  }
}

export default Products
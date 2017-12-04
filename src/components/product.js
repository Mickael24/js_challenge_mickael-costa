import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../styles/Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inOrder: false,
      inWhishList: false
    }
  }

  componentWillReceiveProps(nextProps) {
    let state = {
      inOrder: nextProps.element.inOrder || false,
      inWhishList: nextProps.element.inWhishList || false,
    }
    this.setState(state);
  }

  renderClassPrice(priceDiscounted) {
    if (priceDiscounted) {
      return 'product__price--strike';
    }
    return 'product__price--normal';
  }

  addToBag() {
    this.props.addToBag(this.props.element);
  }

  removeToBag() {
    this.props.removeToBag(this.props.element);
  }

  orderWhishList() {
    if (this.state.inWhishList) {
      this.props.removeToWhishList(this.props.element);
    }
    else if (this.state.inWhishList === false) {
      this.props.addToWhishList(this.props.element);
    }
  }

  renderButtonCart() {
    if (this.state.inOrder) {
      return <button className="product__add-to-cart button button--primary button--in-cart" onClick={() => this.removeToBag()} >Cart</button>
    }

    return <button className="product__add-to-cart button button--primary" onClick={() => this.addToBag()} >Add to Cart</button>
  }

  renderButtonWhisList() {
    if (this.state.inWhishList) {
      return ' button--wishlist-secondary'
    }

    return ' button--wishlist';
  }

  render() {
    return (
      <li className="product-list__item">
        <article className="product" itemScope itemType="http://schema.org/Product">
          <figure className="product__image-wrapper">
            <img className="product__image" src={this.props.element.image} alt="Product" itemProp="image" />
            <button className={'product__wishlist-button button button--round ' + this.renderButtonWhisList()} onClick={() => this.orderWhishList()}>
              <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Wishlist Icon</title>
                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6">
                </polygon>
              </svg>
            </button>
          </figure>
          <div className="product__details">
            <h1 className="product__title" itemProp="brand">{this.props.element.title}</h1>
            <p className="product__subtitle" itemProp="description">{this.props.element.subtitle}</p>
            <div className="product__price" itemScope itemType="http://schema.org/Offer">
              <span className={this.renderClassPrice(this.props.element.priceDiscounted)}>{this.props.element.price}</span><span className="product__price--discounted" itemProp="price">{this.props.element.priceDiscounted}</span>
            </div>
            {this.renderButtonCart()}
          </div>
        </article>
      </li>
    )
  }
}

Product.propTypes = {
  addToBag: PropTypes.func.isRequired,
  addToWhishList: PropTypes.func.isRequired,
  removeToBag: PropTypes.func.isRequired,
  removeToWhishList: PropTypes.func.isRequired,
  element: PropTypes.object.isRequired
};

export default Product
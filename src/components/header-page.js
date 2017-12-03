import React, { Component } from 'react'
import '../styles/Header.css';

class HeaderShooping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bag_price: props.bag_price,
      bag_counter: props.bag.length,
      bag_whish_list_count: props.whishlist.length,
    }
  }


  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      bag_price: nextProps.bag_price,
      bag_counter: nextProps.bag.length,
      bag_whish_list_count: nextProps.whishlist.length,
    });
  }

  render() {
    return (
      <header className="header container">
        <h1 className="page-title">BRAND</h1>
        <aside className="header-bag">
          <div className="header-bag__item header-bag__count">
            <div className="header-bag__price">
             { '£ ' + this.state.bag_price }
            </div>
            <svg className="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Bag Icon</title>
              <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fillRule="evenodd"></path>
            </svg>
            <span className="bag__item-counter">{this.state.bag_counter}</span>
          </div>
          <div className="header-bag__item header-bag__wishlist-count">
            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Wishlist Icon</title>
              <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
            </svg>
            <span className="bag__item-counter">{this.state.bag_whish_list_count}</span>
          </div>
        </aside >
      </header >
    )
  }
}

export default HeaderShooping
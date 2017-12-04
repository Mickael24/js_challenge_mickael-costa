import React, { Component } from 'react'
import '../styles/Pagination.css';

class PaginationPage extends Component {
  _updateProductsByPage(number) {
    let skip = number * 6;
    let batch = skip + 6;
    this.props.updateProductsByPage(skip, batch);
  }
  _renderPage() {
    let pages = [];
    for (let index = 0; index < this.props.paginationCount  ; index++) {
      pages.push(
        <li className="pagination__item" key={index}>
          <a href="#" className="pagination__link" onClick= { () => this._updateProductsByPage(index)}>
            { index + 1}
            </a>
        </li>
      );
    }

    return pages;
  }
  render() {
    return (
      <nav className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <a href="#" className="pagination__link">
              <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Arrow Left</title>
                <polygon id="Left-Icon" stroke="none" fillRule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
              </svg>
            </a>
          </li>
          {
            this._renderPage()
          }
          <li className="pagination__item">
            <a href="#" className="pagination__link">
              <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Arrow Right</title>
                <polygon id="Left-Iocn" stroke="none" fillRule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
              </svg>
            </a>
          </li>
        </ul >
      </nav >
    )
  }
}

export default PaginationPage
import React from 'react';

export default function Navbar(props) {
  return (
    <div>
      <h4>{props.carName}</h4>
      <h4>Year</h4>
      <h4>{props.releaseYear}</h4>
      <h4>Price Range</h4>
      <h4>{props.minPrice} - {props.maxPrice}</h4>
      <h4>Mileage</h4>
      <h4>{props.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} miles</h4>
      <h4>Item Number: #{props.itemNumber}</h4>
      <h4>VIN: {props.vin}</h4>
      <h4>
        <a href="mailto:someone@not-real.com?Subject=Not%20Real" target="_top">Share This Car</a>
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </h4>
      <div>
        <h4>Views</h4>
        <h4>{props.views}</h4>
      </div>
      <div>
        <h4>Saves</h4>
        <h4>{props.saves}</h4>
      </div>
      <div>
        <h4>Shares</h4>
        <h4>{props.shares}</h4>
      </div>
    </div>
  );
}

const propTypes = {
  itemNumber: React.PropTypes.string,
  vin: React.PropTypes.string,
  carName: React.PropTypes.string,
  releaseYear: React.PropTypes.string,
  minPrice: React.PropTypes.string,
  maxPrice: React.PropTypes.string,
  mileage: React.PropTypes.string,
  views: React.PropTypes.string,
  saves: React.PropTypes.string,
  shares: React.PropTypes.string,
};

Navbar.propTypes = propTypes;

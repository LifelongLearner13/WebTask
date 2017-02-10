import React from 'react';

export default function Summary(props) {
  return (
    <div className="summary col">
      <div>
        <h4 className="heading1">{props.carName}</h4>
        <h4 className="heading5">Year</h4>
        <h4 className="heading4">{props.releaseYear}</h4>
        <h4 className="heading5">Price Range</h4>
        <h4 className="heading4">{props.minPrice} - {props.maxPrice}</h4>
        <h4 className="heading5">Mileage</h4>
        <h4 className="heading4">{props.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} miles</h4>
      </div>
      <div className="col-margin">
        <h4 className="heading5 small-bottom-margin">Item Number: #{props.itemNumber} </h4>
        <h4 className="heading5">VIN: {props.vin}</h4>
        <h4 className="heading7">
          <a
            href="mailto:someone@not-real.com?Subject=Not%20Real"
            target="_top"
          >
            Share This Car
          </a>
          <i className="fa fa-envelope icon-margin" aria-hidden="true" />
        </h4>
        <div className="row space-around">
          <div>
            <h4 className="heading5 small-bottom-margin">Views</h4>
            <h4 className="heading2 green-text">{props.views}</h4>
          </div>
          <div className="display-none-mobile ">
            <h4 className="heading5 small-bottom-margin">Saves</h4>
            <h4 className="heading2 green-text">{props.saves}</h4>
          </div>
          <div className="display-none-mobile ">
            <h4 className="heading5 small-bottom-margin">Shares</h4>
            <h4 className="heading2 green-text">{props.shares}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

const propTypes = {
  itemNumber: React.PropTypes.string,
  vin: React.PropTypes.string,
  carName: React.PropTypes.string,
  releaseYear: React.PropTypes.number,
  minPrice: React.PropTypes.string,
  maxPrice: React.PropTypes.string,
  mileage: React.PropTypes.string,
  views: React.PropTypes.number,
  saves: React.PropTypes.number,
  shares: React.PropTypes.number,
};

Summary.propTypes = propTypes;

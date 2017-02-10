import React from 'react';

export default function ImageGallery(props) {
  const handleClick = (event) => {
    props.handlePictureClick(event);
  };

  let content = {};
  if (props.isClickable) {
    content = props.images.map((picture, i) => {
      return (
        <li key={i} className="gallery-tiles">
          <img
            src={picture}
            onClick={handleClick}
            role="presentation"
            className="gallery-thumbnails"
          />
        </li>
      );
    });
  } else {
    content = (
      <div>
        <img
          src={props.images[0]}
          onClick={handleClick}
          role="presentation"
          className="gallery-thumbnails"
        />
        <div className="position-indicator col">
          <i className="fa fa-circle" aria-hidden="true" />
          <i className="fa fa-circle-o" aria-hidden="true" />
          <i className="fa fa-circle-o" aria-hidden="true" />
          <i className="fa fa-circle-o" aria-hidden="true" />
          <i className="fa fa-circle-o" aria-hidden="true" />
          <i className="fa fa-circle-o" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <ul className="row gallery">
      {content}
    </ul>
  );
}

const propTypes = {
  images: React.PropTypes.array,
  handlePictureClick: React.PropTypes.func,
  isClickable: React.PropTypes.bool,
};

ImageGallery.propTypes = propTypes;

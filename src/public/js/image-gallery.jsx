import React from 'react';

export default function ImageGallery(props) {
  let handleClick = (event) => {
    console.log(props)
    props.handlePictureClick(event);
  };

  const list = props.images.map((picture, i) => {
    return (
      <li key={i}>
        <img
          src={'img/' + picture}
          onClick={props.isClickable ? handleClick : ''}
          role="presentation"
        />
      </li>
    );
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

const propTypes = {
  images: React.PropTypes.array,
  handlePictureClick: React.PropTypes.func,
  isClickable: React.PropTypes.bool,
};

ImageGallery.propTypes = propTypes;

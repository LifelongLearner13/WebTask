import React from 'react';

export default function ImageGallery(props) {

  const list = props.images.map((picture, i) => {
    return (
      <li key={i}>
        <img src={'img/' + picture} />
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
};

ImageGallery.propTypes = propTypes;

import React from 'react';

export default function SingleImage(props) {
  return (
    <img src={props.picture} className="single-image" role="presentation" />
  );
}

const propTypes = {
  picture: React.PropTypes.string,
};

SingleImage.propTypes = propTypes;

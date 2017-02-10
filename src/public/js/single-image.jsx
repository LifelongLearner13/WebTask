import React from 'react';

export default function SingleImage(props) {
  return (
    <img src={props.picture} role="presentation" />
  );
}

const propTypes = {
  picture: React.PropTypes.string,
};

SingleImage.propTypes = propTypes;

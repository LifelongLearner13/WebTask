import React from 'react';

export default function SingleImage(props) {
  return (
    <img src={'img/' + props.picture} />
  );
}

const propTypes = {
  picture: React.PropTypes.string,
};

SingleImage.propTypes = propTypes;

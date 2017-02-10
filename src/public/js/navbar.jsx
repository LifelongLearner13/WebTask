import React from 'react';

export default function Navbar(props) {
  return (
    <nav>
      {props.children}
    </nav>
  );
}

const propTypes = {
  children: React.PropTypes.node,
};

Navbar.propTypes = propTypes;

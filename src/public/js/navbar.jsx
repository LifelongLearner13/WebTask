import React from 'react';

export default function Navbar(props) {
  return (
    <nav>
      <div className="float-right">
        {props.children}
      </div>
    </nav>
  );
}

const propTypes = {
  children: React.PropTypes.node,
};

Navbar.propTypes = propTypes;

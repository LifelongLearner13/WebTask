import React from 'react';

export default function Tab(props) {
  return (
    <li>
      <i className={'fa ' + props.icon} title={props.title} aria-hidden="true"></i>
      <span className="sr-only">{ props.srText }</span>
    </li>
  );
}

const propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  srText: React.PropTypes.string,
};

Tab.propTypes = propTypes;

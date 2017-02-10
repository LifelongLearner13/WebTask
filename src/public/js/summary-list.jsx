import React from 'react';

export default function SummaryList(props) {
  const items = Object.keys(props.content).map((key, i) => {
    return (
      <li key={i}>
        <h4>{key}</h4>
        <h4>{props.content[key]}</h4>
      </li>
    );
  });

  return (
    <div>
      <h4>{props.title}</h4>
      <ul>
        {items}
      </ul>
    </div>
  );
}

const propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.object,
};

SummaryList.propTypes = propTypes;

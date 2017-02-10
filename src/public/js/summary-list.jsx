import React from 'react';

export default function SummaryList(props) {
  const items = Object.keys(props.content).map((key, i) => {
    return (
      <tr className="" key={i}>
        <td>
          <h4 className="heading3">{key}</h4>
        </td>
        <td>
          <h4 className="heading4">{props.content[key]}</h4>
        </td>
      </tr>
    );
  });

  return (
    <div className="summary-list">
      <h4 className="heading4 medium-margin">{props.title}</h4>
      <table className="summary-table">
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  );
}

const propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.object,
};

SummaryList.propTypes = propTypes;

import React from 'react';

/*
 * Main component for the WebTask app. Since the app is so small,
 * all state is managed from this component.
 *
 * Browser resizing code was taken from "Different mobile and
 * desktop layouts with React" by Gosha Arinich
 * https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
*/
class CarDetail extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      width: window.innerWidth,
    };
  }

  // Add listener to detect window resizing
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // Remove listener when component is removed
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <p>It Works!</p>
    );
  }
}

module.exports = CarDetail;

import React from 'react';

/*
 * Main component for the WebTask app. Since the app is so small,
 * all state is managed from this component.
 *
 * Browser resizing code was taken from "Different mobile and
 * desktop layouts with React" by Gosha Arinich
 * https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
*/
export default class CarDetail extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      width: window.innerWidth
    };
  }

  // Add listener to detect window resizing
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  // Remove listener when component is removed
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <p>Mobile: {this.state.width}</p>
      );
    } else {
      return (
        <p>{this.state.width}</p>
      );
    }
  }
}

import React from 'react';
import Navbar from './navbar';
import Search from './search';
import Tab from './tab';
import SingleImage from './single-image';
import Summary from './summary';
import ImageGallery from './image-gallery';
import SummaryList from './summary-list';
import CallUs from './call-us';
import Footer from './footer';

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
      width: window.innerWidth,
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

    const images = ['ford1.jpeg', 'ford2.jpeg', 'ford3.jpeg', 'ford4.jpeg', 'ford5.jpeg'];
    const content = {
      Cylinders: 'L4',
      'City MPG': '20',
      'HighWay MPG': '25',
      Engine: 1.3,
    };

    if (isMobile) {
      return (
        <div>
          <Navbar>
            <Tab
              icon="fa-map-marker"
              title="Directions to dealer"
              srText="Directions to dealer"
            />
            <Tab
              icon="fa-phone"
              title="Call dealer"
              srText="Call dealer"
            />
          </Navbar>
          <ImageGallery
            images={images}
          />
          <Summary
            itemNumber="1395P"
            vin="3GNDA13D96S631406"
            carName="Ford Focus"
            releaseYear="2012"
            minPrice="$8,500.00"
            maxPrice="$9,000.00"
            mileage="200000"
            views="37"
            saves="20"
            shares="15"
          />
          <CallUs />
          <SummaryList
            title="Extrior"
            content={content}
          />
          <SummaryList
            title="Performance"
            content={content}
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar>
            <Search />
            <ul>
              <Tab
                icon="fa-map-marker"
                title="Directions to dealer"
                srText="Directions to dealer"
              />
              <Tab
                icon="fa-phone"
                title="Call dealer"
                srText="Call dealer"
              />
              <Tab
                icon="fa-pie-chart"
                title="Stats"
                srText="Stats"
              />
            </ul>
          </Navbar>
          <main>
            <SingleImage
              picture="ford1.jpeg"
            />
            <Summary
              itemNumber="1395P"
              vin="3GNDA13D96S631406"
              carName="Ford Focus"
              releaseYear="2012"
              minPrice="$8,500.00"
              maxPrice="$9,000.00"
              mileage="200000"
              views="37"
              saves="20"
              shares="15"
            />
            <ImageGallery
              images={images}
            />
            <SummaryList
              title="Extrior"
              content={content}
            />
            <SummaryList
              title="Performance"
              content={content}
            />
          </main>
        </div>
      );
    }
  }
}

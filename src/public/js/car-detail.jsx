import React from 'react';
import fetch from 'isomorphic-fetch';
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
    super(props);

    // Initial state
    this.state = {
      width: window.innerWidth,
      isLoading: true,
      car: {},
    };
  }

  // Add listener to detect window resizing
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  componentDidMount() {
    // Since there is only one record, the car id is hard coded
    const url = `${window.location.origin}/api/car/1`;

    // Use Fetch to make async server called
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(url).then((response) => {
      if (response.us < 200 || response.us >= 300) {
        const error = new Error(response.usText);
        error.responsep = response;
        throw error;
      }
      return response;
    })
    .then((content) => {
      return content.json();
    })
    .then((car) => {
      this.setState({ car, isLoading: false });
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
  }

  // Clean up when component is removed
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    // Assign variables to make the JSX more readable
    const { itemNumber, vin,
            carName, releaseYear,
            minPrice, maxPrice,
            mileage, views,
            saves, shares,
            cylinders, city_mpg,
            highway_mpg, engine } = this.state.car;
    const images = ['ford1.jpeg', 'ford2.jpeg', 'ford3.jpeg', 'ford4.jpeg', 'ford5.jpeg'];
    const content = {
      Cylinders: cylinders,
      'City MPG': city_mpg,
      'HighWay MPG': highway_mpg,
      Engine: engine,
    };

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else if (isMobile) {
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
            itemNumber={itemNumber}
            vin={vin}
            carName={carName}
            releaseYear={releaseYear}
            minPrice={minPrice}
            maxPrice={maxPrice}
            mileage={mileage}
            views={views}
            saves={saves}
            shares={shares}
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
              itemNumber={itemNumber}
              vin={vin}
              carName={carName}
              releaseYear={releaseYear}
              minPrice={minPrice}
              maxPrice={maxPrice}
              mileage={mileage}
              views={views}
              saves={saves}
              shares={shares}
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

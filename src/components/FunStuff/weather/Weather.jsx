import React, { Component } from 'react';
import './weather.scss';
import Searches from './Searches';
import WeatherHead from './WeatherHead';
//import WeatherDisplay from './WeatherDisplay';
import countries from './countriesData.js';
//import WbSunnyIcon from '@mui/icons-material/WbSunny';

const API_KEY = "74d3b7a9d1bc8381ecd9eb2acf28fc56";

class Weather extends Component {
  state = {
    cityInput: undefined,
    countryInput: undefined,
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    condition: undefined,
    icon: undefined,
    wind: [undefined, undefined],
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined,
    pressure: undefined,
    error: undefined,
    incorrectCountryNameError: undefined,
    displayComponent: false,
    countryList: []
  }

  //to get location from <Form /> (user inputs)
  getLocations = (city, country, countryNameError) => {
    //handle case: if user enter correct country value
    if (country) {
      // update location state due to user inputs
      this.setState({
        cityInput: city, countryInput: country
      });
      //handle case: if user enter incorrect country value
      //UX: add error message
    } else {
      //console.log('no matching country')
      this.setState({
        incorrectCountryNameError: countryNameError,
        displayComponent: true,
        error: undefined,
        cityInput: city,
        countryInput: country,
        temperature: undefined,
        humidity: undefined,
        condition: undefined,
        icon: undefined,
        wind: [undefined, undefined],
      });
    }
    // handle case: that blind user enter another incorrect country input
    // A11y: to get message read another time
    //this.delayState();
  }

  // to delay hiding incorrectCountryNameError
  // A11y: to get message read another time 
  delayState = function () {
    setTimeout(() => {
      this.setState({ incorrectCountryNameError: undefined });
    }, 3000);
  }

  // use - async await - approche to fetch data from openweathermap API
  // add async before our function
  fetchWeather = async (city, country) => {
    try {
      // add await before make a call
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`);

      // handle response using json() method to turn response into JSON
      const response = await api_call.json();
      //console.log(response);
      //console.log(city, country);
      //console.log(response.cod);

      // handle case: data is fecthed correctly
      if (response.cod === "200") {
        // update weather state after fetching data
        this.setState({
          city: response.city.name,
          country: response.city.country,
          temperature: Math.round(response.list[0].main.temp),
          humidity: response.list[0].main.humidity,
          condition: response.list[0].weather[0].description,
          icon: response.list[0].weather[0].icon,
          wind: [response.list[0].wind.speed, response.list[0].wind.deg],
          feels_like: response.list[0].main.feels_like,
          temp_min: Math.round(response.list[0].main.temp_min),
          temp_max: Math.round(response.list[0].main.temp_max),
          pressure: response.list[0].main.pressure,
          error: undefined,
          incorrectCountryNameError: undefined,
          displayComponent: true
        });
        //console.log(response.list[0].main.humidity, this.state.humidity);
        // handle case: user enter incorrect location
        // simulate case: enter wrong locations
        //UX: add error message
      } else if (response.cod === "404") {
        this.setState({
          error: `!Error: ${response.message}, please check location inputs again`,
          incorrectCountryNameError: undefined,
          cityInput: undefined,
          countryInput: undefined,
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          condition: undefined,
          icon: undefined,
          wind: [undefined, undefined],
          displayComponent: true
        });

      } else {
        // handle case: if invalid API openweathermap key (Unauthorized error)
        // if (response.cod === "401")
        // simulate case: delete from API key
        //UX: add error message
        this.setState({
          error: `!Error: ${response.message} `,
          incorrectCountryNameError: undefined,
          cityInput: undefined,
          countryInput: undefined,
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          condition: undefined,
          icon: undefined,
          wind: [undefined, undefined],
          displayComponent: true
        });

      }

      //handle case: if fetch request fails due to network issues or fetched url incorrect
      // User is offline, DNS troubles, network errors
      // simulate case: disconnect internet or delete anything from fetched url
      //UX: add error message
    } catch (error) {
      this.setState({
        cityInput: undefined,
        countryInput: undefined,
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        condition: undefined,
        icon: undefined,
        wind: [undefined, undefined],
        displayComponent: true,
        error: `!Error: something went wrong with network`,
        incorrectCountryNameError: undefined
      });
    }

  }

  componentDidMount() {
    //console.log('App  componentDidMount')
    this.setState({ countryList: countries },
      () => console.log(this.state.countryList));
  }

  // adding prevProps parameter corrected the multiple call issue
  componentDidUpdate(prevProps, prevState) {


    //console.log('App componentDidUpdate', this.state.incorrectCountryNameError, this.state.displayComponent);
    //console.log(this.state.cityInput, this.state.countryInput);
    //check value countryInput != undefined to make network request
    //a network request may not be necessary if the state (locations user enterd) have not changed
    //console.log(prevState.cityInput, prevState.countryInput);
    if ((this.state.cityInput !== prevState.cityInput || this.state.countryInput !== prevState.countryInput) && this.state.countryInput !== undefined) {
      //console.log('yes fetch', this.state.cityInput, prevState.cityInput);
      //console.log(this.state.countryInput, prevState.countryInput);
      // handle case: that blind user enter another incorrect input
      // A11y: to get message read another time
      if (this.state.error) {
        this.setState({ error: undefined });
      }
      //console.log('fetching weather');
      this.fetchWeather(this.state.cityInput, this.state.countryInput);

    }
    // else if ((this.state.cityInput !== prevState.cityInput || this.state.countryInput !== prevState.countryInput) && this.state.countryInput === undefined) {
    //   if(!this.state.displayComponent) {
    //     this.setState({displayComponent: true});
    //   } else {
    //     this.setState({displayComponent: false});
    //   }
    // }

  }


  render() {
    // console.log('App render');
    return (
      <div className="weather">
        <header role="banner" className="title">
          <img src="assets/Circle-icons-weather.svg" alt="" />
          <h1>Weather</h1>
        </header>
        <Searches
          onSubmit={this.getLocations}
          countryList={this.state.countryList}
        />
        <WeatherHead
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          condition={this.state.condition}
          icon={this.state.icon}
          wind={this.state.wind}
          feels_like={this.state.feels_like}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          pressure={this.state.pressure}
          error={this.state.error}
          incorrectCountryNameError={this.state.incorrectCountryNameError}
          displayComponent={this.state.displayComponent}
        />
      </div>
    );
  }
}

export default Weather;

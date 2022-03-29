import React, { Component } from 'react';
import './weather.scss';
import Searches from './Searches';
import WeatherHead from './WeatherHead';
import countries from './countriesData.js';

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

  getLocations = (city, country, countryNameError) => {
    if (country) {
      this.setState({
        cityInput: city, countryInput: country
      });
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
    // get message read another time
    //this.delayState();
  }

  // delayState = function () {
  //   setTimeout(() => {
  //     this.setState({ incorrectCountryNameError: undefined });
  //   }, 3000);
  // }

  fetchWeather = async (city, country) => {
    try {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`);
      const response = await api_call.json();

      // data is fetched correctly
      if (response.cod === "200") {
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
        // incorrect location
      } else if (response.cod === "404") {
        this.setState({
          error: `Error: ${response.message}, please check input city name`,
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
        // invalid API openweathermap key (Unauthorized error)
        // response.cod === "401"
        this.setState({
          error: `Error: ${response.message} `,
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

      // fetch request fails due to network issues or fetched url incorrect
      // User is offline, DNS troubles, network errors
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
        error: `Network error`,
        incorrectCountryNameError: undefined
      });
    }

  }

  componentDidMount() {
    //console.log('App  componentDidMount')
    this.setState({ countryList: countries },
      () => console.log(this.state.countryList));
  }

  componentDidUpdate(prevProps, prevState) {


    //console.log('App componentDidUpdate', this.state.incorrectCountryNameError, this.state.displayComponent);
    //console.log(this.state.cityInput, this.state.countryInput);
    //check value countryInput != undefined to make network request
    //a network request may not be necessary if the state have not changed
    //console.log(prevState.cityInput, prevState.countryInput);
    if ((this.state.cityInput !== prevState.cityInput || this.state.countryInput !== prevState.countryInput) && this.state.countryInput !== undefined) {
      //console.log('yes fetch', this.state.cityInput, prevState.cityInput);
      //console.log(this.state.countryInput, prevState.countryInput);
      // another incorrect input
      if (this.state.error) {
        this.setState({ error: undefined });
      }
      //console.log('fetching weather');
      this.fetchWeather(this.state.cityInput, this.state.countryInput);

    }
  }


  render() {
    return (
      <div className="weather" id="weather">
      <div className="weather-wrapper-all">
        <div className="search-head">
          <header role="banner" className="title">
            <img src="assets/Circle-icons-weather.svg" alt="" />
            <h1>Weather</h1>
            <span className="descrip">Get current weather for any city!</span>
          </header>
          <Searches
            onSubmit={this.getLocations}
            countryList={this.state.countryList}
          />
        </div>
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
      </div>
    );
  }
}

export default Weather;

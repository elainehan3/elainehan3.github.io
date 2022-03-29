import React, { Component } from "react";
import CountrySearch from './CountrySearch';

class Searches extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let city = document.getElementsByName('city')[0].value;
    let country = document.getElementById('mycountries').value;
    let key = this.props.countryList.filter((option, index) => {
      return option.value === country[0].toUpperCase() + (country).substr(1);
    });
    //console.log(key, country);
    if (key.length > 0) {
      this.props.onSubmit(city, key[0].code, undefined);
    } else {
      this.props.onSubmit(city, undefined, 'Error: invalid country');
    }
  }

  componentDidMount() {
    //console.log('Search componentDidMount');        
  }

  render() {
    //console.log('Search render');
    return (
      <section className="search-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="search-row">
            <input
              aria-label="Search by city name"
              aria-required="true"
              placeholder="Search city name"
              className="search-text"
              type="text" name="city"
              required />
          </div>
          <CountrySearch
            countryList={this.props.countryList}
          />
          <button className="getw-btn" type="submit">Get Weather</button>
        </form>
      </section>
    );
  }
}

export default Searches;

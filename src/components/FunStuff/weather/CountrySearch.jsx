import React, {Component} from 'react';

class CountrySearch extends Component {
    componentDidMount() {
        //console.log('DataList componentDidMount');        
    }
    render() {
        //console.log('DataList render');        
        return(
            <div className="search-row">
                <label hidden htmlFor="countries">Select a country</label>
                <input 
                    aria-label="Search by country name"
                    aria-required="true"
                    placeholder="Search country name"
                    className="search-text" 
                    list="countries" 
                    id="mycountries" 
                    name="mycountries"
                    required />
                <datalist id="countries">
                    {this.props.countryList.map((option, index) => {return <option name="countryOption" key={index} value={option.value}/>})}
                </datalist>
            </div>
        );
    }
}

export default CountrySearch;

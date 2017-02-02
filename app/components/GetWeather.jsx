import React from 'react';
import openWeatherMap from 'openWeatherMap';

class WeatherForm extends React.Component {

  onFormSubmit(e){
    e.preventDefault();
    this.props.onCitySubmitFtn(this.CityName.value);
  }

  render(){

    this.onFormSubmit = this.onFormSubmit.bind(this);
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Enter City Name" ref={(input) => {this.CityName = input}} />
        <input type="submit" value="Get Weather" />
      </form>
    )
  }
}

let WeatherMessage = (props) => {
  return (
    <p>The temp in {props.cityName} is {props.weatherTemp}</p>
  )
}


class GetWeather extends React.Component {

  constructor(props){
    super(props);

    this.onCitySubmit = this.onCitySubmit.bind(this);

    this.state = {
      isLoading:false
    }
  }

  onCitySubmit(cityName){
    this.setState({isLoading:true});
  //  let that = this;

    openWeatherMap(cityName).then((temp)=>{
      this.setState({
        city:cityName,
        temp:temp,
        isLoading:false
      });

    }, (err) => {
      this.setState({isLoading:false});
      console.log(err);
    })

  }

  render(){

// let addStatement = (a,b) => { return a+b };

    let renderMessage = () => {
    //  console.log(that);
      if (this.state.isLoading) {
        return <p>Fetching Weather...</p>;

      } else if (this.state.temp && this.state.city) {

        return  <WeatherMessage cityName={this.state.city} weatherTemp={this.state.temp}/>;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onCitySubmitFtn={this.onCitySubmit} />
        {renderMessage()}
      </div>
    )
  }
}

export default GetWeather;

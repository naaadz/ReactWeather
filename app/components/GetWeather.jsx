import React from 'react';
import openWeatherMap from 'openWeatherMap';
import ErrorMessage from 'ErrorMessage';

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
        <button className="hollow button expanded" href="#">Get Weather</button>
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
      isLoading:false,
      errorMessage: undefined
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

    }, (e) => {
      console.log('open weather callback',e.message);
      this.setState({
        isLoading:false,
        errorMessage:e.message,
        city:undefined,
        temp:undefined
      });


    })

  }

  componentWillReceiveProps(newProps){

    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      //run open weather Search
      this.onCitySubmit(location);
      window.location.hash = '#/';
    }
  }

  componentDidMount() {

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

    let renderErrorMessage = () => {
      if (typeof this.state.errorMessage === 'string') {
        console.log('display Error Modal');
        return  <ErrorMessage message={this.state.errorMessage} />
      }
    }

    //debugger;

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onCitySubmitFtn={this.onCitySubmit} />
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    )
  }
}

export default GetWeather;

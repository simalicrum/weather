import React, { Component } from "react";
import secret from "./secret";

class App extends Component {
  constructor() {
    super();
    this.state = {
      locationinput: "",
      temp: "",
      city: "",
      weather: "",
      windspeed: "",
      visibility: "",
      img: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }
  handleInputChange(event) {
    this.setState({ locationinput: event.target.value });
  }
  async getWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${secret.OPEN_WEATHER_MAP_KEY}`,
        { mode: "cors" }
      );
      return await response.json();
    } catch (error) {
      console.log("Oops!", error);
    }
  }
  async getBackground(weather) {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${secret.UPSPLASH_APP_KEY}&query=${weather}`,
        { mode: "cors" }
      );
      return await response.json();
    } catch (error) {
      console.log("Oops!", error);
    }
  }
  async setWeather(event) {
    event.preventDefault();
    try {
      const result = await this.getWeather(this.state.locationinput);
      if (result.cod === "404" && result.message === "city not found") {
        alert("City not Found");
        document.getElementById("location-form").reset();
      } else {
        const background = await this.getBackground(result.weather[0].main);
        const tempInC = Math.round(result.main.temp - 273.15);
        this.setState({
          temp: tempInC,
          city: result.name,
          weather: result.weather[0].main,
          windspeed: result.wind.speed,
          visibility: result.visibility,
          img: background,
        });
        document.getElementById("location-form").reset();
        document
          .getElementById("weather-results")
          .setAttribute("class", "shown");
        document.body.style.backgroundImage = `url('${this.state.img.urls.regular}'`;
      }
    } catch (error) {
      console.log("Oops!", error);
    }
  }
  render() {
    return (
      <div id="weather-card">
        <h1>Weatherthing</h1>
        <form id="location-form" onSubmit={this.setWeather}>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
        <div id="weather-results" className="hidden">
          <h2>Current conditions for {this.state.city}:</h2>
          <h2>{this.state.weather}</h2>
          <h3>Temperature: {this.state.temp}&#8451;</h3>
          <h3>Wind Speed: {this.state.windspeed} kph</h3>
        </div>
      </div>
    );
  }
}

export default App;

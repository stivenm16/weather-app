import React from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Nav from './Components/SearchBar/Nav'
import {Denver} from './data'





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    }
    
    
  }


  updateState = () => {
    this.setState({
      cities: e.target.value
    })
  }

  // onClose = (id)  => {
  //   this.setState(oldCities => oldCities.filter(c => c.id !== id));
  // }

  onSearch = (ciudad) => {
    
    
    const apiKey = '4a34d196e48d4aa8b9b537136715f679'
      
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      
      if(recurso.main !== undefined ){ // && repeated === false
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
      
        
        // setCities(oldCities => oldCities.filter(c => c.id === recurso.main.id));
        this.updateState(oldCities => [...oldCities, ciudad]);
        // setRepeated(true)
      } else {
        alert("Ciudad no encontrada");
      }
      
    });
    
}
  

  render(){
      return (
        <div>
        <Nav
        onSearch={this.onSearch}
        />
        <Cards
        cities = {this.state.cities}
        />
        </div>
        
      )
    }
  };


export default App

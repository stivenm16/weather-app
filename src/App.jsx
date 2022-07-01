import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'
import Cards from './Components/Cards/Cards'
import Nav from './Components/SearchBar/Nav'
import City from './Components/City/City'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onClose = (id)  => {
    this.setState({cities : this.state.cities.filter(c => c.id !== id)});
  }

  onFilter = (ciudadId) => {
    let ciudad = this.state.cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  onSearch = (ciudad) => {
    
    
    const apiKey = '4a34d196e48d4aa8b9b537136715f679'
      
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(r => r.json())
    .then((recurso) => {
      
      if(recurso.main !== undefined){
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
        
        this.setState({cities: [...this.state.cities, ciudad]})
        
      } else {
        alert("Ciudad no encontrada");
      }
      
    });
    
}
  
  render(){
      return (
        <div>
          <Route
          path='/'
          render={() => <Nav
            onSearch={this.onSearch}
            />}
          />

          <Route
          exact path='/'
          render={() => <Cards
            cities = {this.state.cities}
            onClose = {this.onClose}
            />}
          />
          
          <Route
          exact path='/ciudad/:ciudadId'
          render={(props) => <City
          city={onFilter(props.match.params.ciudadId)}
          />}
        />
        
        
        </div>
        
      )
    }
  };


export default App

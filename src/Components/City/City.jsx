import React from 'react';
import './City.css'


class City extends React.Component {
    constructor(props) {
      super(props);

    }
    render(){
        return(

            <div className='city'>
               <div className="container-city">
                <h2 className="title-city">{this.props.city.name}</h2>
                
                
                <div className="container-temp">
                    <p className='temp-exact'>Temp: {this.props.city.temp}°</p>
                    <p className='temp-exact'>Temp max: {this.props.city.max}°</p>
                    <p className='temp-exact'>Temp min: {this.props.city.min}°</p>
                </div>
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.city.img+"@2x.png"} width="80" height="80" alt="" />    
                <div className="container-bottom-city">
                    <div className='wind-box'>
                        <p>Wind: {this.props.city.wind}</p>
                        <p>Clouds: {this.props.city.clouds}</p>
                    </div>
                    <div className='lat-box'>
                        <p>Longitud: {this.props.city.longitud}</p>
                        <p>Latitud: {this.props.city.latitud}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }    
}

export default City
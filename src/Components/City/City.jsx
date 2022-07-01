import React from 'react';
import './City.css'


class City extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(

            <div className='city'>
               <div className="container">
                
                
                <p className="title">{this.props.name}</p>
                <div className="container-temp">
                    <p>Temp: {this.props.temp}°</p>
                    <p>Temp max: {this.props.max}°</p>
                    <p>Temp min: {this.props.min}°</p>
                </div>
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.img+"@2x.png"} width="80" height="80" alt="" />    
                <div className="container-bottom-city">
                    <div>
                        <p>Wind: {this.props.wind}</p>
                        <p>Clouds: {this.props.clouds}</p>
                    </div>
                    <div>
                        <p>Longitud: {this.props.longitud}</p>
                        <p>Latitud: {this.props.latitud}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }    
}

export default City
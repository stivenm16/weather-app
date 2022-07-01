import React from "react";
import './Card.css'

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
          <div className="card">
            <button className="close-btn" onClick={this.props.onClose}>X</button>
            <h2 className="title">{this.props.name}</h2>
            <div className="container-bottom">
                <div className="temp-min">
                    <h2>Min</h2>
                    <h2>{this.props.min}°</h2>
                </div>
                <div className="temp-max">
                    <h2>Max</h2>
                    <h2>{this.props.max}°</h2>
                </div>
                <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`}/>
            </div>
          </div>
        )
      }
    };

export default Card

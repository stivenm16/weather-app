import React from "react";
import './Card.css'

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
          <div>
            <button>X</button>
            <h2>{this.props.name}</h2>
            <div>
                <div>
                    <h2>Min</h2>
                    <h2>{this.props.min}°</h2>
                </div>
                <div>
                    <h2>Min</h2>
                    <h2>{this.props.max}°</h2>
                </div>
                <img src="#" />
            </div>
          </div>
        )
      }
    };

export default Card

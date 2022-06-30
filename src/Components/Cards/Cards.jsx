import React from 'react';
import Card from '../Card/Card';
import './Cards.css'



class Cards extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
            <div className='cards'>
            {this.props.cities.map(c => 
              <Card
              max={c.main.temp_max}
              min={c.main.temp_min}
              name={c.name}
              img={c.weather[0].icon}
              onClose={() => alert(c.name)}
              key = {c.id}
            />)}
            </div>)
      }
    };

export default Cards

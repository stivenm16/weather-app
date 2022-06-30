import React from 'react';
import Card from '../Card/Card';


class Cards extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
            <div>
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

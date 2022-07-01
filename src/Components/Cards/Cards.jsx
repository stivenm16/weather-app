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
            {
              console.log(this.props.cities) 
            }
            {
            
            this.props.cities.map(c => 
              <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              // onClose={() => alert(c.name)}
              key = {c.id}
            />)}
            </div>)
      }
    };

export default Cards

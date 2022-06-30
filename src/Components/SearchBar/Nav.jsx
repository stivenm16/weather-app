import React from "react";
import './Nav.css'

class Nav extends React.Component {
    constructor({onSearch}) {
      super(onSearch);
    }
    render(){
        return (
            <div className="container-header">
                <input type="text" placeholder="City" onChange={this.onSearch} className='input'/>
                <button type="submit"className="submit">Add</button>
            </div>)
      }
    };

export default Nav

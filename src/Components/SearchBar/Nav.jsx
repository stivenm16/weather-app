import React from "react";
import './Nav.css'

class Nav extends React.Component {
    constructor({onSearch}) {
      super(onSearch);
      this.state = {
        city: ''
      }
    }
    updateState = (e) => {
      this.setState({
        city: e.target.value
      })
    }
    
    render() {
        return (


          <form 
          className="container-header"
          onSubmit={(e) => {
          e.preventDefault();
          onSearch(city); 
          this.setState({city:''})
          }}
          >

            <div className="box">

                <input 
                type="text" 
                placeholder="City" 
                value={this.state.city}
                onChange = {e => this.updateState(e)}
                className='input'/>
               
                <button 
                type="submit"
                className="submit"> 
              
                Add
                </button>
            </div>
          </form>  
          )
      }
    };

export default Nav

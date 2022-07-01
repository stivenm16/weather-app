import React from "react";
import './Nav.css'

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        city: ''
      }
      // onSearch = onSearch.bind(this)
      // console.log(onSearch('Bogota'))
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
          console.log(this.props.onSearch( () => 'Lima'))
          // onSearch(this.state.city); 
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

import React from "react";
import './Nav.css'
import  Logo from '../../Icons/github.png'


class Nav extends React.Component {
    constructor(props) {
      super(props);
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

            <div className="header">
              <img src={Logo} alt="" className="icon-github" />
              <form 
              className="container-header"
              onSubmit={(e) => {
              e.preventDefault();
              this.props.onSearch(this.state.city); 
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
        </div>
          
          )
      }
    };

export default Nav

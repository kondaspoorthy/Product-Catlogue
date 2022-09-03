import React from 'react';
import './App.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value2:this.props.Value1
    }
    
    this.handleForm = this.handleForm.bind(this);
    this.handleChange =  this.handleChange.bind(this); 
   
    
  }
  handleChange(e){
    this.setState({value2:e.target.value})
  }
  handleForm(e){
    this.props.onClick1(this.state.value2);
    e.preventDefault();
  }


  render() {  
    
    return (
      <nav className="navbar navbar-light bg-light" >
      <div className="container-fluid">
        <a className="navbar-brand">Food Hub</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {this.state.value2}  onChange = {this.handleChange} />
          <button className="btn btn-success" type="submit" onClick={this.handleForm}>Search</button>
        </form>
      </div>
    </nav>
      
      );

  }
}
export default Navbar;

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Products from './Products';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterText:'',
            pressed:false,
        };
        this.Onevent = this.Onevent.bind(this);
    }
    
    
    Onevent(searched){
        this.setState({
            filterText:searched,

        });

    }
    render() { 
        return (
            <Fragment>
            <Navbar Value1 = {this.state.filterText} onClick1 = {this.Onevent} />
            <div class = "container mt-6"  >
    
            
             <Products Value3 = {this.state.filterText}/>
             </div>
            </Fragment>

         );
    }
}
 
export default App;
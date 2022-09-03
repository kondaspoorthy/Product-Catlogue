import React, { Component } from 'react';
class Products extends Component {
    constructor(props) {
        super(props);
    this.state = {
        data1: [], 

     };
     this.getData = this.getData.bind(this);
     
    }
     getData(){
      fetch('./products.json')
      .then((response) => response.json())
      .then((findresponse)=> {
      this.setState({
      data1:findresponse
     })
     
})
      return;
   }
    
   componentDidMount(){
    console.log("HI I Entered here")
    this.getData();
    
 }
 
 render() {
  
  return(
    <div className ="row g-3" id = "element">{this.state.data1.filter((val)  => {
      if(this.props.Value3 == " " ){
        return val
      }
      else if(val.Tittle.toLowerCase().includes(this.props.Value3.toLowerCase()) || val.cateogry.toLowerCase().includes(this.props.Value3.toLowerCase())){
        return val
      }

    }).map(item =>
    <React.Fragment>
     <div className="col-xs-7 col-sm-6 col-md-4 col-lg-3 ">
    <div className="card">
    <img className="card-img-top" src= {item.image} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title">{item.Tittle}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{item.cateogry}</h6>
    <p className="card-text">Tasty and Delicious Food.</p>
    <p className="card-text"> RS. {item.Price}</p>
  
  </div>
</div>
</div>
    </React.Fragment> 
    )} </div>

     
      );

  }
}
  

  

 
export default Products;




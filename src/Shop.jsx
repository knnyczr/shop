import React, { Component } from 'react'; 
import fire from './fire';


export default class Shop extends Component {
  constructor(props) {
      super(props);
      this.state ={
        shirt: 2, 
        pants: 3, 
        hoodie: 3, 

      }
  }
componentDidMount(){
    console.log(this.state)
    
}

  render(){
      return(
        <div>
        
        </div>
      )
  }
}
import React, { Component } from 'react'; 

export default class Shop extends Component {
  constructor(props) {
      super(props);
      this.state ={

      }
  }

  render(){
      return(
          <div>
            <div className="card" style={{width: 2}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
          </div>
      )
  }
}
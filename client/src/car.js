import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'



import "./car.css";

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedA: null 
        };
    
      }
      render() {
          return (
            <div> 
            <a id= 'Back' class="btn btn-primary" role="button" href='/login'>Back</a> 
              
              <div id="app">
                  <ParticlesBg type="cobweb" bg={true} />
        <h1>Gift is on the Way!</h1>
        <h2>Estimated Shipping Time: 72 hrs</h2>
        <h2>Add a picture of the car here and delete this line</h2>
        <div>
          <form class="pure-form pure-form-aligned">
          <div id="button1"></div>
  
          </form>
        </div>
      </div>
      </div>
          )
      }
    }
    export default Car;
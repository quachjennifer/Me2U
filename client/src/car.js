import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'
import car from './assets/car.png'



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
              <a id= 'Back' class="btn btn-primary back-button" role="button" href='/login'>Back</a>
              <img src={car} alt="car" />
              <div id="app">
                <ParticlesBg type="cobweb" bg={true} />
                <h1>Gift is on the Way!</h1>
                <h2>Estimated Shipping Time: 72 hrs</h2>
              </div>
            </div>
          )
      }
    }
    export default Car;

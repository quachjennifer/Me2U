import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'



import "./send.css";

class Send extends React.Component {
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
            <div id="app">
      <ParticlesBg type="circle" bg={true} />
<h1>Mail</h1>
<div>
<form class="pure-form pure-form-aligned">
<fieldset>
    <h2>Sender Information</h2>
    <label>Name</label>
  <div class="pure-control-group">
    <input id="name" type="text"/>
  </div>

  <label>Address</label>
  <div class="pure-control-group">
    <input id="address" type="text"/>
  </div>

  <label>City</label>
  <div class="pure-control-group">
    <input id="city" type="text"/>
  </div>

  <label>State</label>
  <div class="pure-control-group">
    <input id="state" type="text"/>
  </div>

  <label>Zip Code (Optional)</label>
  <div class="pure-control-group">
    <input id="zipcode" type="text"/>
  </div>

  <label>Pick Up Date (MM/DD/YYYY)</label>
  <div class="pure-control-group">
    <input id="pickupdate" type="text"/>
  </div>

  <h2>Recipient Information</h2>
  <label>Name</label>
  <div class="pure-control-group">
    <input id="name" type="text"/>
  </div>

  <label>Address</label>
  <div class="pure-control-group">
    <input id="address" type="text"/>
  </div>

  <label>City</label>
  <div class="pure-control-group">
    <input id="city" type="text"/>
  </div>

  <label>State</label>
  <div class="pure-control-group">
    <input id="state" type="text"/>
  </div>

  <label>Zip Code (Optional)</label>
  <div class="pure-control-group">
    <input id="zipcode" type="text"/>
  </div>

  <label>Pick Up Date (MM/DD/YYYY)</label>
  <div class="pure-control-group">
    <input id="pickupdate" type="text"/>
  </div>


  <a id= 'Payment' class="btn btn-primary" role="button" href='/payment'>Payment</a>

  <div class="pure-controls">



  </div>
</fieldset>
</form>
</div>
</div>
</div>
          )
      }
    }
    export default Send;

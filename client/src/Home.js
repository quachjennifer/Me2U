import React from 'react';
import {Button, Jumbotron, Container} from "react-bootstrap";

import logo from './assets/Logo.png'

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedA: null,
      //descript1: null,
      //descript2: null,
      //score : null,
      //description: null
    };
  
    this.getSelectedValue1 = this.getSelectedValue1.bind(this);


    // new button
    this.onButtonPressed1=this.onButtonPressed1.bind(this);
  }
  

  handleChange = selectedChoice => {
    this.setState({ selectedChoice });
  };

  getSelectedValue1(event){

    var sign1 = event.target.value;
    this.setState({selectedA: sign1}, this.getData1);
    console.log(sign1);
  }

  

  onButtonPressed1() {
    this.props.history.push('/login');
    this.props.handleChange(this.state.selectedA);
  }

  render() {
    return(
      
      <div id="app">
      <ParticlesBg type="circle" bg={true} />
<img src={logo} alt="Logo" />
<div>
  <form class="pure-form pure-form-aligned">
    <fieldset>
      <div class="pure-control-group">
        <input id="name" type="text" placeholder="Username" onChange={this.getSelectedValue1}/>
      </div>

      <div class="pure-control-group">
        <input
          class="pure-input-1-2"
          id="password"
          type="password"
          id="password"
          type="password"
          class="pure-input-1-2"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <Button variant="warning" class="mx-auto" onClick={this.onButtonPressed1}>Login</Button>

    </fieldset>
  </form>
 
</div>   
</div>  


  
        
      );
    }
  
        
    
  
        
    
    }
  
  
export default Home;
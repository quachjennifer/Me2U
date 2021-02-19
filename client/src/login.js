import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import ParticlesBg from 'particles-bg'

import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedA: null
    };

    this.onButtonPressed1=this.onButtonPressed1.bind(this);
    this.onButtonPressed2=this.onButtonPressed2.bind(this);

  }

    onButtonPressed1() {
      this.props.history.push('/send');

    }

  onButtonPressed2() {
    this.props.history.push('/receive');
  }

    render() {
        return (
          <div>
            <a id= 'Button' class="btn btn-primary" role="button" href='./'>Back</a>
            <div id="app">
              <ParticlesBg type="circle" bg={true} />
              <h1>Welcome {this.props.name}</h1>
              <h2>Would you like to send or receive a gram?</h2>
              <h2>All fundings will go to charity</h2>
              <div>
                <form class="pure-form pure-form-aligned">
                  <a id= 'Send' class="btn btn-primary" role="button" href='/send'>Send</a>
                  <a id = 'Receive' class="btn btn-primary" role="button" href='/car'>Receive</a>
                </form>
              </div>
            </div>
          </div>
        )
    }
  }
  export default Login;

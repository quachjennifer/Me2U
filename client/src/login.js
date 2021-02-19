import React from 'react';
import data from './data.json';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import "./login.css";


class Login extends React.Component {
  
    render() {
        return (
            <div id="app">
                <ParticlesBg type="circle" bg={true} />
      <h1>Login</h1>
      <div>
        <form class="pure-form pure-form-aligned">
          <fieldset>
            <div class="pure-control-group">
              <label for="name">Username</label>
              <input id="name" type="text" placeholder="Username" />
            </div>

            <div class="pure-control-group">
              <label for="password">Password</label>
              <input
                class="pure-input-1-2"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div class="pure-control-group">
              <label for="email">Message</label>
              <textarea
                class="pure-input-1-2 message"
                placeholder="Textareas work too"
              ></textarea>
            </div>

            <div class="pure-controls">
              <button type="submit" class="pure-button pure-button-primary">
                Submit
              </button>

              <Button variant="warning" href="/" >Try Again</Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
        )
    }
  }
  export default Login;
import React from 'react';
import { BrowserRouter as Router, Route, useHistory, Switch, useRouteMatch} from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Login from './login';
import Send from './send';
import Payment from './payment';
import Car from './car';

class App extends React.Component {
  // Initialize the state here in the parent component so it can be shared with child components (Home/Results)
  constructor(props) {
    super(props);

     this.state = {
      name: "",
      zodiac2: "" 
     }

     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value1, value2) {
    this.setState({name: value1});
  }

  render() {
    return(
    <Router>  
      <Switch>
        <Route exact path='/' exact component={routeProps => <Home {...routeProps} handleChange={this.handleChange} />}>
          </Route> 


        <Route path='/login' exact component = {() => <Login name ={this.state.name}/>} />
        
        <Route path='/send' exact component = {() => <Send /> } />

        <Route path='/payment' exact component = {() => <Payment /> } />

        <Route path='/car' exact component = {() => <Car /> } />
     </Switch>


      </Router>

    
      );
      // return <Home value={value} onChange={handleChange} />;
    }
  }
export default App;

// hello world
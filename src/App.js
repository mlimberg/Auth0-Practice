import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import Auth from './Auth';


class App extends Component {

  render() {
    const auth = new Auth()

    const handleAuth = (props) => {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        auth.handleAuthentication()
      }
    }

    return (
      <div className="App">
        <Route path='/home' render={props => <Home auth={auth} /> } />
        <Route exact path='/' render={(props) => {
          handleAuth(props)
          return <Callback auth={auth} />
        }} />
      </div>
    );
  }
}

export default App;

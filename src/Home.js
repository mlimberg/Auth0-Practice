import React, { Component } from 'react';
import Auth from './Auth'

export default class Home extends Component {
  constructor() {
    super()
    this.auth = new Auth()
  }

  componentDidMount() {
    console.log('auth ', this.props.auth.isAuthenticated());
  }

  handleLogin() {
    this.auth.login()
  }

  render() {
    const authenticated = this.auth.isAuthenticated()
    console.log('auth ', this.props.auth);

    return (
      <div>
        <h1>Home tho!!!!</h1>
        <button onClick={ () => this.handleLogin() }>Sign In</button>
      </div>
    )
  }
}

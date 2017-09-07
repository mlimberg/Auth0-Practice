import React, { Component } from 'react';
import Auth from './Auth'

export default class Home extends Component {
  constructor() {
    super()
    this.state = { user: null }
    this.auth = new Auth()
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.setState({ user: true })
    }
  }

  handleLogin() {
    this.auth.login()
  }

  handleLogout() {
    this.auth.logout()
    this.setState({ user: null })
  }

  render() {
    const authenticated = this.auth.isAuthenticated()

    const toggleButton = () => {
      return authenticated ?
      <button onClick={ () => this.handleLogout() }>Sign Out</button> :
      <button onClick={ () => this.handleLogin() }>Sign In</button>
    }

    return (
      <div>
        <h1>Home tho!!!!</h1>
        { toggleButton() }
        {this.state.user &&
         <div>
           <h1>User Details</h1>
           <p>Blah blah blah I'm a user and I have stuff</p>
         </div>
        }
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Plantio</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" onClick={this.goTo.bind(this, 'home')}/>
        {
          !isAuthenticated() && (
            <Button className="bp3-minimal" icon="log-in" text="Login" onClick={this.login.bind(this)} />
          )
        }
        {
          isAuthenticated()&& (
            <Button className="bp3-minimal" icon="log-out" text="Logout" onClick={this.logout.bind(this)} />
          )
        }
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className='bp3-minimal bp3-icon-notifications'/>
        <Button className='bp3-minimal bp3-icon-cog'/>
        <Button className='bp3-minimal bp3-icon-user'/>
      </Navbar.Group>
    </Navbar>
    );
  }
}

export default App;

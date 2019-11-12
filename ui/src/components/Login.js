import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

  }

  onSubmit(event) {
    event.preventDefault();
    console.log('State: ', this.state);
    fetch(`${API_HOST}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('New User Data: ', data);
        window.location.pathname = '/orders'
      })
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <Link to="/order">Sign in as guest</Link>
      </div>
    );
  };
}

export default Login;
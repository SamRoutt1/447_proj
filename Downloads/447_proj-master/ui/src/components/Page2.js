import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      food: '',
      name: '',
      phone: "",
      pickOrDel: "",
      address: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onFoodChange = this.onFoodChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPickOrDelChange = this.pickOrDel.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    
    fetch(`${API_HOST}/orders`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('Order Data: ', data);
      })
  }

  onFoodChange(event){
    this.setState({
      food: event.target.value
    });
  }

  onNameChange(event){
    this.setState({
      name: event.target.value
    });
  }

  onPhoneChange(event){
    this.setState({
      phone: event.target.value
    });
  }

  onAddressChange(event){
    this.setState({
      address: event.target.value
    });
  }

  onPickOrDelChange(event){
    this.setState({
      pickOrDel: event.target.value
    });
  }
  render() {
    return(
      <div>
        <h1>Order Form</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group >
            <Form.Label>Food Item</Form.Label>
            <Form.Control
              type="food"
              placeholder="Enter Food Item"
              value = {this.state.food}
              onChange= {this.onFoodChange}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value = {this.state.name}
              onChange = {this.onNameChange}

            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Phone Number"
              value = {this.state.phone}
              onChange = {this.onPhoneChange}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Pickup or delivery?</Form.Label>
            <Form.Control as="select">
              <option>pickup</option>
              <option>delivery</option>
              value = {this.state.pickOrDel}
              onChange = {this.onPickOrDelChange}
            </Form.Control>
          </Form.Group>

          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="Address"
              placeholder="Address"
              value = {this.state.address}
              onChange = {this.onAddressChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Page2;
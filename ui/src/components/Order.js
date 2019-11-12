import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Order extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: {
        food: '',
        name: '',
        phone: '',
        pickOrDel: 'Pickup',
        address: ''
      },
      submitted: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onFoodChange = this.onFoodChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPickOrDelChange = this.onPickOrDelChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    
    fetch(`${API_HOST}/orders`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state.order)
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          submitted: true
        });
        console.log('Order Data: ', data);
      })
  }

  onFoodChange(event){
    const newOrder = {...this.state.order};
    newOrder.food = event.target.value;
    this.setState({
      order: newOrder
    });
  }

  onNameChange(event){
    const newOrder = {...this.state.order};
    newOrder.name = event.target.value;
    this.setState({
      order: newOrder
    });
  }

  onPhoneChange(event){
    const newOrder = {...this.state.order};
    newOrder.phone = event.target.value;
    this.setState({
      order: newOrder
    });
  }

  onAddressChange(event){
    const newOrder = {...this.state.order};
    newOrder.address = event.target.value;
    this.setState({
      order: newOrder
    });
  }

  onPickOrDelChange(event){
    const newOrder = {...this.state.order};
    newOrder.pickOrDel = event.target.value;
    this.setState({
      order: newOrder
    });
  }

  render() {
    return(
      <div>
        <h2>Order Form</h2>
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
            <Form.Control
              as="select"
              value={this.state.pickOrDel}
              onChange={this.onPickOrDelChange}
            >
              <option>Pickup</option>
              <option>Delivery</option>
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
        {this.state.submitted ? (
          <p>Your order had been submitted.</p>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default Order;
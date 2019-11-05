import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Page2 extends Component {

  render() {
    return(
      <div>
        <h1>Order Form</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group >
            <Form.Label>Food Item</Form.Label>
            <Form.Control
              type="text"
              placeholder=""

            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""

            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder=""

            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Pickup or delivery?</Form.Label>
            <Form.Control as="select">
              <option>pickup</option>
              <option>delivery</option>
            </Form.Control>
          </Form.Group>

          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder=""

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
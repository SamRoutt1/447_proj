import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

class OrderCard extends Component {

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.data.PickupOrDelivery}{' for '}{this.props.data.CustomerName}</Card.Title>
          <Card.Text>
            Address: {this.props.data.Address}
          </Card.Text>
          <Card.Text>
            Phone: {this.props.data.PhoneNumber}
          </Card.Text>
          <Card.Text>
            Item: {this.props.data.FoodItem}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default OrderCard;
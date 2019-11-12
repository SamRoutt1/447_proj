import React, {Component} from 'react';
import OrderCard from './OrderCard';
class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      orders: []
    }

    this.getOrders = this.getOrders.bind(this);
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    fetch(`${API_HOST}/orders`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          orders: data
        });
      })
  }

  render() {
    return(
      <div>
        <h2>Orders</h2>
        {this.state.orders.map((order, i) => (
          <div key={i} >
            <OrderCard data={order} />
          </div>
        ))}
      </div>
    );
  }
}

export default Orders;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const getBadge = (status) => {
  return status === 'created' ? 'success' :
    status === 'shipped' ? 'secondary' :
      status === 'delivered' ? 'warning' :
        status === 'undelivered' ? 'danger' :
          'primary'
}

class Orders extends Component {


    render(){
      const { order } = this.props
      let orderLink = `/order/${order._id}`
        return (
            <tr>
              <th scope="row"><Link to={orderLink}><Badge color={getBadge(order.status)}>{order.status}</Badge></Link></th>
              <td><Link to={orderLink}>{order.cost}</Link></td>
              <td><Link to={orderLink}>{order.shippingCost}</Link></td>
              <td>{order.state}</td>
              <td>{order.city}</td>
              <td>
              {order.products.map((pro, key)=>{
                return <Badge className="mr-1" key={key} color="info" pill> {pro.name} </Badge>
              })}
              </td>
              <td>{order.shippingCompany.name}</td>
            </tr>
          )
    }
}

export default Orders;

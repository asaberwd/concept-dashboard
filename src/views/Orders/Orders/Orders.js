import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'
import SingleOrder from './order.js'


function UserRow(props) {
  const user = props.user
  const userLink = `/orders/${user.id}`

  const getBadge = (status) => {
    return status === 'created' ? 'success' :
      status === 'shipped' ? 'secondary' :
        status === 'delivered' ? 'warning' :
          status === 'undelivered' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}

class Orders extends Component {

  state ={

  }

  componentDidMount = ()=>{
    axios.get('http://localhost:3000/api/vieworders')
        .then((res)=>{
            if(res.error){
                this.setState({
                    error : res.error
                })
                console.log('error===', res.error)
            }else{
                this.setState({
                    orders : res.data.data
                })
                console.log('data===', res.data)
            }
            
        })
        .catch(err =>{
            console.log('error loading resource')
        })
  }

  render() {
    const { error, orders } = this.state
    console.log('=======', error, orders)

    if(orders){
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Orders 
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">status</th>
                        <th scope="col">total</th>
                        <th scope="col">shipping</th>
                        <th scope="col">city</th>
                        <th scope="col">region</th>
                        <th scope="col">products</th>
                        <th scope="col">shipping co</th>
                      </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) =>
                        <SingleOrder key={index} order={order}/>
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }else{
      return(
        <div>
          loading orders >>>
        </div>
      )
    }
  }
}

export default Orders;

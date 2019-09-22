import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import axios from 'axios'



class User extends Component {

  state ={

  }

  componentDidMount = ()=>{
    axios.get(`http://localhost:3000/api/order/${this.props.match.params.id}`)
        .then((res)=>{
            if(res.error){
                this.setState({
                    error : res.error
                })
                console.log('error===', res.error)
            }else{
                this.setState({
                    order : res.data.data
                })
                console.log('data===', res.data)
            }
            
        })
        .catch(err =>{
            console.log('error loading resource')
        })
  }


  render() {
    const { order , error } = this.state
console.log('order', order)
    if(order){
      return (
        <div className="animated fadeIn">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>order status : {order.status}</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        <tr>
                          <td>order total</td>
                          <td>{order.cost} L.E</td>
                        </tr>
                        <tr>
                          <td>shipping cost</td>
                          <td>{order.shippingCost} L.E</td>
                        </tr>
                        <tr>
                          <td>city</td>
                          <td>{order.state}</td>
                        </tr>
                        <tr>
                          <td>Province</td>
                          <td>{order.city}</td>
                        </tr>
                        <tr>
                          <td>Province</td>
                          <td>{order.city}</td>
                        </tr>
                        
                        <tr>
                        <td>products</td>
                        <td>
                        {order.products.map((pro, key)=>{
                          return ( <Badge className="mr-1" key={key} color="info" pill> {pro.name} </Badge> )
                        })}
                        </td>
                        </tr>

                      </tbody>
                    </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  else{
    return(
    <div>
      Loading ... 
    </div>
    )
  }
  }
}

export default User;

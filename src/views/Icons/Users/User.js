import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'

import usersData from './UsersData'

class User extends Component {

  state ={

  }

  componentDidMount = ()=>{
    axios.get(`http://localhost:3000/api/user/${this.props.match.params.id}`)
        .then((res)=>{
            if(res.error){
                this.setState({
                    error : res.error
                })
                console.log('error===', res.error)
            }else{
                this.setState({
                    user : res.data.data
                })
                console.log('data===', res.data)
            }
            
        })
        .catch(err =>{
            console.log('error loading resource')
        })
  }


  render() {
    const { user , error } = this.state
console.log('user', this.state.user)
    if(user){
      return (
        <div className="animated fadeIn">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>User name: {user.name}</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td><strong> {user.name} </strong></td>
                        </tr>
                        <tr>
                          <td>arabic name</td>
                          <td><strong> {user.arabicName} </strong></td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td><strong> {user.phone[0]} </strong></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td><strong> {user.email[0]} </strong></td>
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

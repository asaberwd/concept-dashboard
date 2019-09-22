import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'
import Uuser from './user'

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
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

class Users extends Component {

  state ={

  }

  componentDidMount = ()=>{
    axios.get('http://localhost:3000/api/viewusers')
        .then((res)=>{
            if(res.error){
                this.setState({
                    error : res.error
                })
                console.log('error===', res.error)
            }else{
                this.setState({
                    users : res.data.data
                })
                console.log('data===', res.data)
            }
            
        })
        .catch(err =>{
            console.log('error loading resource')
        })
  }

  render() {
    const { error, users } = this.state
    console.log('=======', error, users)
    const userList = usersData.filter((user) => user.id < 10)

    if(users){
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> System Users 
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">arabicName</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">role</th>
                        <th scope="col">status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) =>
                        <Uuser key={index} user={user}/>
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
          loading users >>>
        </div>
      )
    }
  }
}

export default Users;

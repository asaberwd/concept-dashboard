import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class User extends Component {


    render(){
      const { user } = this.props
      let userLink = `/user/${user._id}`
        return (
            <tr>
              <th scope="row"><Link to={userLink}>{user._id}</Link></th>
              <td><Link to={userLink}>{user.name}</Link></td>
              <td><Link to={userLink}>{user.arabicName}</Link></td>
              <td>{user.email[0]}</td>
              <td>{user.phone[0]}</td>
              <td>{user.role}</td>
              <td><Link to={userLink}></Link></td>
            </tr>
          )
    }
}

export default User;

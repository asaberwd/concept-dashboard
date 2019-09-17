
import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom';


class SingleLead extends Component { 

    render(){
        const { lead } = this.props
        let leadLink = `/lead/${lead._id}`
        return(
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-secondary"></span>
                </div>
              </td>
              <td>
                <div> <Link to={leadLink}> {lead.fullName} </Link> </div>
                <div className="small text-muted">
                  <span>{lead.status}</span> | Registered:{lead.registerDate}
                </div>
              </td>
              <td className="text-center">
                <span className="avatar-status badge-secondary"> {lead.country} </span>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>98%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="danger" value="98" />
              </td>
              <td className="text-center">
                {lead.cost}
              </td>
              <td className="text-center">
                {lead.tr}
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>Last month</strong>
              </td>
            </tr>
        )
    }
}

export default SingleLead;

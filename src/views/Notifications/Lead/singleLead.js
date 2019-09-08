
import React, { Component } from 'react';
import { Progress } from 'reactstrap';


class SingleLead extends Component { 

    render(){
        const { lead } = this.props
        return(
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-secondary"></span>
                </div>
              </td>
              <td>
                <div> {lead.fullName} </div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                </div>
              </td>
              <td className="text-center">
                <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>
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
                <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
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

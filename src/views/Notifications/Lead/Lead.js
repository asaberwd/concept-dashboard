import React, { Component } from 'react';
import { Table, Row } from 'reactstrap';
import axios from 'axios'
import SingleLead from './singleLead'


class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount= ()=>{
    axios.get('http://localhost:3000/api/viewleads')
    .then((res)=>{
        if(res.error){
            this.setState({
                error : res.error
            })
            console.log('error===', res.error)
        }else{
            this.setState({
                leads : res.data.data
            })
            console.log('data===', res.data)
        }
        
    })
    .catch(err =>{
        console.log('error loading resource')
    })
}


  render() {
    const { leads, error }=  this.state
    console.log('leads ===', this.state.leads)

    if(error){
            return(
            <div className="animated fadeIn">
                { error }
            </div>
            )
        }
        if(!leads){
            return(
                <div className="animated fadeIn">
                Loading leads >>>>
                </div>
            )
        }
        if(leads){
            return(
              <div className="animated fadeIn">
        
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Lead</th>
                    <th className="text-center">Country</th>
                    <th>Country</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                    { leads.map((lead, key)=>{
                    return <SingleLead key={key} lead={lead} />
                      }) }
                </tbody>
                </Table>
                </div>
            )
        }
    return (
      <div className="animated fadeIn">
        
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
            <tr>
              <th className="text-center"><i className="icon-people"></i></th>
              <th>Lead</th>
              <th className="text-center">Country</th>
              <th>Country</th>
              <th className="text-center">Payment Method</th>
              <th>Activity</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
      </Table>
      </div>
    );
  }
}

export default Alerts;

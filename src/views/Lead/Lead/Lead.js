import React, { Component } from 'react';
import { Table, Row } from 'reactstrap';
import axios from 'axios'
import SingleLead from './singleLead'


class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemPerPage : 5,
      currentPage : 1,
    };

  }

  componentDidMount= ()=>{
    axios.get(`http://localhost:3000/api/viewleads?page=${this.state.currentPage}`)
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

  onChange =(event)=>{
    this.props.history.push(`/lead?page=${Number(event.target.name)}`)
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { leads, error }=  this.state
    console.log('leads ===', this.state.leads)
    console.log('page number is : ', this.state.currentPage)

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
                    <th className="text-center">cost</th>
                    <th className="text-center">source</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                    { leads.map((lead, key)=>{
                    return <SingleLead key={key} lead={lead} />
                      }) }
                </tbody>
                </Table>
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item" ><a class="page-link" id="1" onClick={this.onChange} >1</a></li>
                    <li class="page-item" id="2" onClick={this.onChange}>
                      <a class="page-link" href="#">2 <span class="sr-only"></span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
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

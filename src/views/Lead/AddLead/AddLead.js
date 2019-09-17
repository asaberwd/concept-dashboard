import React, { Component } from 'react';
import axios from 'axios'
import FormData from 'form-data'

class addLead extends Component {

  state={
    fullName:'',
    country:'',
    telephone:'',
    lead:'',
    cost:0,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleUpload = event =>{
    this.setState({
      [event.target.name]: event.target.files[0],
      loaded: 0,
    })
  }

  onSubmit = event =>{
    event.preventDefault()
    const { fullName, country, telephone, lead, cost } = this.state

    let newLead = { fullName, country, telephone, lead, cost }
    if(!lead) delete newLead.lead

    axios.post('http://localhost:3000/api/addlead', newLead)
    .then(res => {
      console.log('res ===',res.data.data.fullName)
      this.setState({
        res:res.data.data.fullName,
        name:'',
        category:'',
        describtion:'',
        count:0,
        image:'',
        price:0,
        res:''
      })
    })
    .catch(err =>{
      console.log('error ===', err)
      this.setState({
        error: err
      })
    })
  }


  render(){
    const { res, error } = this.state
    console.log('state:', this.state)
    return(
      <div>
  <form onSubmit={this.onSubmit} >
  <fieldset>
    <legend>Add New Lead</legend>
    <div className="form-group row">
    </div>
    <div className="form-group">
      <label>Full Name</label>
      <input type="text" name="fullName" className="form-control" required id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter lead full name"/>
    </div>

    <div className="form-group">
      <label > phone number </label>
      <input type="text" name="telephone" className="form-control" required id="exampleInputEmail1" onChange={this.handleChange} placeholder="phone number"/>
    </div>

    <div className="form-group">
      <label > country </label>
      <input type="text" name="country" className="form-control" required id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter country"/>
    </div>

    <div className="form-group">
      <label > Refered By </label>
      <input type="text" name="lead" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter lead id"/>
    </div>
    
    <div className="form-group">
      <label > cost </label>
      <input type="number" name="cost" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter cost of lead"/>
    </div>

    { res?(<div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Great job!</strong> <a href="#" class="alert-link">new Lead added succesfully</a> product name : {res}.
        </div>):''}


    <button type="submit" className="btn btn-primary" > Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addLead;

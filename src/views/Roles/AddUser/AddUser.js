import React, { Component } from 'react';
import { Input } from 'reactstrap';
import axios from 'axios'

class addLead extends Component {

  state={
    name:'',
    phone:'',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onSubmit = event =>{
    event.preventDefault()
    

    axios.post('http://localhost:3000/api/adduser', this.state)
    .then(res => {
      console.log('res ===',res.data.data.name)
      this.setState({
        res:res.data.data.name,
        arabicName: "",
        email: "",
        name: "",
        phone: "",
        role: "",
        workType: "",
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
    const { res, error, name, arabicName, phone, workType, email, role } = this.state
    console.log('state:', this.state)
    return(
      <div>
  <form onSubmit={this.onSubmit} >
  <fieldset>
    <legend>Add New user</legend>
    <div className="form-group row">
    </div>
    <div className="form-group">
      <label>Name</label>
      <input type="text" name="name" className="form-control" required id="exampleInputEmail1" 
      onChange={this.handleChange} placeholder="Enter lead full name" value={name}/>
    </div>

    <div className="form-group">
      <label>Arabic Name</label>
      <input type="text" name="arabicName" className="form-control" required id="exampleInputEmail1"
       onChange={this.handleChange} placeholder="Enter lead full name" value={arabicName} />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input type="email" name="email" className="form-control" required id="exampleInputEmail1"
       onChange={this.handleChange} placeholder="Enter lead full name" value={email} />
    </div>

    <div className="form-group">
      <label>Select Role</label>
      <Input type="select" name="role" id="select1" onChange={this.handleChange} value={role}>
      <option value="0">select role</option>
        <option value="sales">Sales</option>
        <option value="leader">Team Leader</option>
        <option value="marketing">Marketing</option>
        <option value="admin">Admin</option>
      </Input>
    </div>

    <div className="form-group">
      <label > phone number </label>
      <input type="text" name="phone" className="form-control" required id="exampleInputEmail1"
       onChange={this.handleChange} placeholder="phone number" value={phone} />
    </div>

    <div className="form-group">
      <label > work Type </label>
      <Input type="select" name="workType" id="select2" onChange={this.handleChange} value={workType} >
        <option value="0">select type</option>
        <option value="from-home">From Home</option>
        <option value="part-time">Part Time</option>
        <option value="full-time">Full Time</option>
      </Input>
    </div>
    

    { res?(<div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Great job!</strong> <a href="#" class="alert-link">new user added succesfully</a> user name : {res}.
        </div>):''}

    { error?(<div class="alert alert-dismissible alert-success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>sorry!</strong> <a href="#" class="alert-link">error adding new user</a> error is : : {error}.
    </div>):''}


    <button type="submit" className="btn btn-primary" > Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addLead;

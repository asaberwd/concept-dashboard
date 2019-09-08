import React, { Component } from 'react';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import axios from 'axios'
import FormData from 'form-data'

class addProduct extends Component {

  state={
    name:'',
    category:'',
    describtion:'',
    count:0,
    image:''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleUpload = event =>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onSubmit = event =>{
    event.preventDefault()
    const { name, category, describtion, count, selectedFile } = this.state

  let form = new FormData()
  form.append('name', name )
  form.append('category', category )
  form.append('describtion', describtion )
  form.append('count', count )
  form.append('selectedFile', selectedFile)

  axios({
    method: 'post',
    processData: false,
    contentType: 'multipart/form-data',
    cache: false,
    url: 'http://localhost:3000/api/addproduct', 
    data: form,
    config: { headers: form.getHeaders() }

  })
  }


  render(){
    console.log('state :', this.state)
    return(
      <div>
  <form type="multipart/form-data">
  <fieldset>
    <legend>Legend</legend>
    <div className="form-group row">
    </div>
    <div className="form-group">
      <label>Name</label>
      <input type="text" name="name" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter product name"/>
    </div>
    
    <div className="form-group">
      <label > select category </label>
      <select className="form-control" id="exampleSelect1" name="category" value={this.state.category} onChange={this.handleChange}>
        <option> green coffe </option>
        <option> perfume </option>
        <option> hair oils </option>
      </select>
    </div>

    <div className="form-group">
      <label > count </label>
      <input type="number" name="count" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter number of products"/>
    </div>

    <div className="form-group">
      <label >product describtion</label>
      <textarea className="form-control" name="describtion" id="exampleTextarea" onChange={this.handleChange} rows="3"></textarea>
    </div>
    
    <div className="form-group">
      <label > product image </label>
      <input type="file" name="image" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.handleUpload}/>
      <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
    </div>

    <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit}> Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addProduct;

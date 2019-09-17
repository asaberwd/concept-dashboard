import React, { Component } from 'react';
import axios from 'axios'
import FormData from 'form-data'

class addProduct extends Component {

  state={
    name:'',
    category:'',
    describtion:'',
    count:0,
    image:'',
    price:0,
    res:''
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
    const { name, category, describtion, count, selectedFile, price } = this.state

    let form = new FormData()
    form.append('name', name )
    form.append('category', category )
    form.append('describtion', describtion )
    form.append('count', count )
    form.append('selectedFile', selectedFile)
    form.append('price', price)


    axios({
      method: 'POST',
      processData: false,
      contentType: 'multipart/form-data',
      cache: false,
      url: 'http://localhost:3000/api/addproduct', 
      data: form,
      //config: { headers: form.getHeaders() }
    })
    .then(res => {
      console.log('res ===',res.data.data.name)
      this.setState({
        res:res.data.data.name,
        name:'',
        category:'',
        describtion:'',
        count:0,
        image:'',
        price:0,
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
    return(
      <div>

  <form onSubmit={this.onSubmit} >
  <fieldset>
    <legend> Add New Product</legend>
    <div className="form-group row">
    </div>
    <div className="form-group">
      <label>Name</label>
      <input type="text" name="name" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter product name"/>
    </div>
    
    <div className="form-group">
      <label > select category </label>
      <select className="form-control" id="exampleSelect1" name="category" value={this.state.category} onChange={this.handleChange}>
        <option> select category </option>
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
      <label > price </label>
      <input type="number" name="price" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter product price"/>
    </div>

    <div className="form-group">
      <label > product image </label>
      <input type="file" name="selectedFile" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.handleUpload}/>
      <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
    </div>

    { res?(<div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Great job!</strong> <a href="#" class="alert-link">new product added succesfully</a> product name : {res}.
        </div>):''}

    {error?(<div class="alert alert-dismissible alert-danger">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Oh sorry!</strong> <a href="#" class="alert-link">error adding new product :</a> {error}.
    </div>):''}


    <button type="submit" className="btn btn-primary" > Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addProduct;

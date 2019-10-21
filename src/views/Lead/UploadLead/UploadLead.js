import React, { Component } from 'react';
import axios from 'axios'
import FormData from 'form-data'

class addLead extends Component {

  state={

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
    const { exelFile } = this.state

    let form = new FormData()
    form.append('exelFile', exelFile)


    axios({
      method: 'POST',
      processData: false,
      contentType: 'multipart/form-data',
      cache: false,
      url: 'http://localhost:3000/api/uploadleads', 
      data: form,
    })
    .then(res => {
      console.log('res ===',res.data)
      this.setState({
        res:res.data,
        exelFile:''
      })
    })
    .catch(error =>{
      console.log('error ===', error)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      this.setState({
        error
      })
    })
  }


  render(){
    const { res, error, exelFile } = this.state
    console.log('state:', this.state)
    return(
      <div>
  <form onSubmit={this.onSubmit} >
  <fieldset>
    <legend>Add leads By Excel</legend>
    <div className="form-group row">
    </div>

    <div className="form-group">
      <label > add excel file </label>
      <input type="file" name="exelFile" required className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.handleUpload}/>
      <small id="fileHelp" className="form-text text-muted">You must add .xlsx files only.empty files or fields may result in errors and lead will not be added.</small>
    </div>

    { res?(<div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Great job!</strong> <a href="#" class="alert-link">file uploaded succesfully</a> {res.leads} leads added .
      </div>):''}

    {error?(<div class="alert alert-dismissible alert-danger">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Oh sorry!</strong> <a href="#" class="alert-link">error uploading file </a> .
    </div>):''}


    <button type="submit" className="btn btn-primary" disabled={ exelFile?false:true} > Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addLead;

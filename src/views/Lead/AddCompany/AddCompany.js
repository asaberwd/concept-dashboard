import React, { Component } from 'react';
import axios from 'axios'
import {
  Label,
  Col,
  FormGroup,
  Input,
} from 'reactstrap';
class addCompany extends Component {

  state={

  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  onSubmit = event =>{
    event.preventDefault()

    const { phone, Cairo, Alexandria, Ismailia, Aswan, Asyut, Luxor, RedSea, Beheira, BeniSuef, PortSaid,
    SouthSinai, Giza, Dakahlia, Damietta, Sohag, Suez, Sharqia, NorthSinai, Gharbia, Faiyum,
    Qalyubia, Qena, KafrElSheikh, Matruh, Monufia, Minya, NewValley } = this.state

    let newCompany ={}

    let filterVal = (obj)=>{
      let newObj = Object.entries(obj)
      for(let i = 0; i < newObj.length;i++){
        if ( newObj[i][0] !== 'name' && newObj[i][0] !== 'phone'){
          console.log('obj', newObj[i] )
          if(newObj[i].length > 0 && newObj[i][1]){
          newCompany[newObj[i][0]] = parseInt(newObj[i][1] )
          }
        }else{
          newCompany[newObj[i][0]] = newObj[i][1] 
        }
      }
      
    }
    filterVal(this.state)

    axios.post('http://localhost:3000/api/addcompany', newCompany)
    .then(res => {
      console.log('res ===',res.data.data.fullName)
      this.setState({
        res:res.data.data.name,
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
    <legend>Add New Company</legend>
    <div className="form-group row">
    </div>
    <div className="form-group">
      <label>Company name</label>
      <input type="text" name="name" className="form-control" required id="exampleInputEmail1" onChange={this.handleChange} placeholder="Enter company name"/>
    </div>

    <div className="form-group">
      <label > phone number </label>
      <input type="text" name="phone" className="form-control" onChange={this.handleChange} required id="exampleInputEmail1" onChange={this.handleChange} placeholder="phone number"/>
    </div>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">cairo</Label>
        <Input type="number" name="Cairo" placeholder="cairo price" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Alexandria</Label>
        <Input type="number" name="Alexandria" placeholder="alex price" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder="ismailie price" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">Aswan</Label>
        <Input type="number" name="Aswan" placeholder="Aswan price" />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Asyut</Label>
        <Input type="text" name="Asyut" placeholder="Asyut price" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Luxor</Label>
        <Input type="number" name="Luxor" placeholder="Luxor price" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">Red Sea</Label>
        <Input type="number" name="RedSea" placeholder="Red Sea price" onChange={this.handleChange}/>
      </Col>
      <Col md="4">
        <Label htmlFor="name">Beheira</Label>
        <Input type="text" name="Beheira" placeholder="Beheira price" onChange={this.handleChange}/>
      </Col>
      <Col md="4">
        <Label htmlFor="name">BeniSuef</Label>
        <Input type="number" name="BeniSuef" placeholder="BeniSuef price" onChange={this.handleChange}/>
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">PortSaid</Label>
        <Input type="number" name="PortSaid" placeholder="PortSaid" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">SouthSinai</Label>
        <Input type="number" name="SouthSinai" placeholder="SouthSinai price" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder=".col-md-4" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">cairo</Label>
        <Input type="number" name="Cairo" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Alexandria</Label>
        <Input type="number" name="Alexandria" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder=".col-md-4" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">cairo</Label>
        <Input type="number" name="Cairo" placeholder=".col-md-8" onChange={this.handleChange}/>
      </Col>
      <Col md="4">
        <Label htmlFor="name">Alexandria</Label>
        <Input type="number" name="Alexandria" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder=".col-md-4" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">cairo</Label>
        <Input type="number" name="Cairo" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Alexandria</Label>
        <Input type="number" name="Alexandria" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder=".col-md-4" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Col md="4">
        <Label htmlFor="name">cairo</Label>
        <Input type="number" name="Cairo" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Alexandria</Label>
        <Input type="number" name="Alexandria" placeholder=".col-md-8" onChange={this.handleChange} />
      </Col>
      <Col md="4">
        <Label htmlFor="name">Ismailia</Label>
        <Input type="number" name="Ismailia" placeholder=".col-md-4" onChange={this.handleChange} />
      </Col>
    </FormGroup>

    { res?(<div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Great job!</strong> <a href="#" class="alert-link">new company added succesfully</a> company name : {res}.
        </div>):''}


    <button type="submit" className="btn btn-primary" > Submit </button>
  </fieldset>
</form>
      </div>
    )
  }
}

export default addCompany;

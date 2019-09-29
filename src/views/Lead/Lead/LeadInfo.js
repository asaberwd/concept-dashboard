import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Input, Label, Form, Button, CardFooter } from 'reactstrap';
import axios from 'axios'
import settings from './../../../assets/csvjson.json'
import MakeOrder from './order'
import Calls from './calls'
import Schedule from './schedule'

class User extends Component {

  state ={
  }

  componentDidMount = ()=>{
    axios.get(`http://localhost:3000/api/lead/${this.props.match.params.id}`)
      .then((res)=>{
        if(res.error){
            this.setState({
                error : res.error
            })
            console.log('error===', res.error)
        }else{
          let phone = res.data.data.telephone
          phone = phone.substring(0,phone.length -4).concat('****')
            this.setState({
                lead : res.data.data,
                calls: res.data.calls,
                phone
            })
            console.log('data===', res.data)
        }
          
      })
      .catch(err =>{
        console.log('error loading resource')
      })

      let states = settings.states_translation.filter((city)=>{
        return city.lang === 'en'
      })

      this.setState({
        states
      })

  }

  handleChange = async event => {
    this.setState({
      [event.target.name]:event.target.value
    })
    if(event.target.name === 'state'){
      if(event.target.value !== '0'){
       let valid = settings.cities.filter(st =>{
          return st.state_id == event.target.value
        })
        console.log('valid', valid)
        console.log('value', event.target.value)

        let cities = await settings.cities_translation.filter((city)=>{
          return ( city.lang === "en" &&  valid.some(el =>{
            return el.id == city.city_id
          }) )
        })
        this.setState({ cities })
      }
    }
  }

  handelShow = ()=>{
    
    this.setState({
      show:true
    })

    setTimeout(()=>{
      this.setState({
        show:false
      })
    },
    20000)
  }


  render() {
    const { lead , phone, show, calls } = this.state
    console.log('lead', lead)
    console.log('cities', this.state.cities)
    if(lead){
        console.log('sales', lead.sales)

      return (
        <div className="animated fadeIn">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong>
                    <i className="fa fa-database fa-lg mt-4"></i>  Lead Info:
                  </strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td><strong> {lead.fullName} </strong></td>
                        </tr>
                        <tr>
                          <td>status</td>
                          <td><strong> {lead.status} </strong></td>
                        </tr>
                        <tr>
                          <td>traffic source</td>
                          <td><strong> {lead.tr} </strong></td>
                        </tr>
                        <tr>
                          <td>phone</td>
                          <td><strong> { show?lead.telephone:phone} </strong> <button disabled={ show?true:false} onClick={this.handelShow}>show</button></td>
                        </tr>
                        <tr>
                          <td>sales agent</td>
                          <td><strong> {lead.user ?lead.user.name : ''} </strong></td>
                        </tr>
                        <tr>
                          <td>country</td>
                          <td><strong> {lead.country ?lead.country : ''} </strong></td>
                        </tr>
                        <tr>
                          <td>registered at</td>
                          <td><strong> {lead.registerDate ?lead.registerDate : ''} </strong></td>
                        </tr>
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
              <Calls  calls={calls} status={lead.status} lead={lead._id} user={lead.user ?lead.user._id : ''} />
              </Col>
              <Col lg={6}>
                <Schedule user={lead.user ?lead.user._id : ''} lead={lead._id} />
                <MakeOrder lead={lead._id}/>
              </Col>

        
          </Row>
        </div>
      )
    }
  else{
    return(
    <div>
      Loading ... 
    </div>
    )
  }
  }
}

export default User;

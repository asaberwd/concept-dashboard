import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table, FormGroup, Input, Label, Form, Button, CardFooter } from 'reactstrap';
import axios from 'axios'


class Calls extends Component {

    state ={
        oldState: this.props.status,
        selected : this.props.status,
        calls:this.props.calls,
        status :[ 'closed', 'new', 'not intersted','no answer', 'wrong number', 'accepted', 'follow up', 'hot'  ]
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmit = event =>{
        event.preventDefault()
        const { oldState, selected, note } = this.state

        let newCall = {
            note,
            oldState,
            newState:selected,
            lead:this.props.lead,
            user:this.props.user,
            calls:this.props.calls,
        }
    
        axios.post( 'http://localhost:3000/api/call', newCall)
        .then(res => {
          console.log('res ===',res.data.data.name)
          this.setState({
            res:res.data.data,
            oldState : this.props.status,
            selected : this.props.status,
            note : ''
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
        const { status, selected, note, calls, res, error }= this.state
        console.log('err ==', error)
        return (
            <Card >
                <CardHeader>
                <strong> Calls </strong>
                </CardHeader>
                <CardBody>
                <strong> create Call </strong> 
                <Col >
                <Form onSubmit={ this.onSubmit } className="form-horizontal">
                <FormGroup >
                  <label > select new state </label>
                  <select className="form-control" id="exampleSelect1" name="selected" value={selected}
                   onChange={this.handleChange}>
                    { status.map((st)=>{
                        return (
                            <option value={st}> {st} </option>
                        )
                    }) }
                  </select>
                </FormGroup >

                <FormGroup >
                    <Label htmlFor="textarea-input"> Add Call comment </Label>
                    <Input type="textarea" name="note" id="textarea-input" rows="4"
                        onChange={this.handleChange} value={note} />
                </FormGroup>

{ res?(<div class="alert alert-dismissible alert-success">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Great job!</strong> <a href="#" class="alert-link">new call added succesfully</a> call note : {res.note}.
</div>):''}

                <CardFooter>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </CardFooter>
                </Form>
                </Col>
                <Table responsive striped>
                    <thead>
                    <tr>
                    <th>Date</th>
                    <th>Old state</th>
                    <th>comment</th>
                    <th>new state</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    { calls? calls.map((ca)=>{
                        return (<tr key={ca._id}>
                            <td > {ca.date} </td>
                            <td > {ca.oldState} </td>
                            <td > {ca.note} </td>
                            <td > {ca.newState} </td>
                            </tr>)
                    }): 'no calls' }
                    
                    </tbody>

                </Table>
            </CardBody>
            </Card>
        )
    }
}

export default Calls
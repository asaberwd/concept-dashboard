import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table, FormGroup, Input, Label, Form, Button, CardFooter } from 'reactstrap';
import axios from 'axios'

import moment from 'moment';


class Schedule extends Component {

    state ={
        
    }

    componentDidMount = ()=>{
        this.setState({
            date: moment().format('YYYY/MM/DD'),
            time: moment().format('HH:MM')
        })
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmit = event =>{
        event.preventDefault()

        const { note, date, time } = this.state


        let scheduleDate = moment(date + ' ' + time).format()

        let newSchedule = {
            note,
            date: scheduleDate,
            user:this.props.user,
            lead:this.props.lead
        }
    
        axios.post( 'http://localhost:3000/api/schedule', newSchedule)
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
        const { date, time, note, res, error }= this.state
        console.log('sched state ==', this.state)
        let m = (date&& time) ? moment(date + ' ' + time).format():' '
        console.log('ttt', m)
        console.log(moment().format("YYYY/MM/DD"), date )
        console.log(moment().format('HH:MM'), time )
        return (
            <Card >
                <CardHeader>
                <strong> Schedule </strong>
                </CardHeader>
                <CardBody>
                <strong> create schedule </strong> 
                <Col >
                <Form onSubmit={ this.onSubmit } className="form-horizontal">
                <FormGroup >
                <Input type="date" name="date" value={date} onChange={this.handleChange}/>
                <Input type="time" name="time" value={time} onChange={this.handleChange} />
                </FormGroup >

                <FormGroup >
                    <Label htmlFor="textarea-input"> Add Note </Label>
                    <Input type="textarea" name="note" id="textarea-input" rows="4"
                        onChange={this.handleChange} value={note} />
                </FormGroup>

{ res?(<div class="alert alert-dismissible alert-success">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Great job!</strong> <a href="#" class="alert-link">new schedule added succesfully</a> schedule note note : {res.note}.
</div>):''}

                <CardFooter>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </CardFooter>
                </Form>
                </Col>
                
            </CardBody>
            </Card>
        )
    }
}

export default Schedule
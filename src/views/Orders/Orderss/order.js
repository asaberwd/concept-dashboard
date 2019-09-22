import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, CardFooter } from 'reactstrap';


class Product extends Component {


    render(){
        const { pro } = this.props
        return(            
                <Col xs="12" sm="6" md="4">
                <div className="card mb-3">
                    <h3 className="card-header"> { pro.name }</h3>
                    <div className="card-body">
                        <h5 className="card-title"> { pro.category } </h5>
                        <h6 className="card-subtitle text-muted">Price : {pro.price} </h6>
                    </div>
                    <img style={{height: '200px', width: '100%', display: 'block'}} src={pro.images} alt="Card image" />
                    <div className="card-body">
                        <p className="card-text"> {pro.describtion}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Available: {pro.count} items </li>
                        <li className="list-group-item">Created at: {pro.createdAt} </li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Product details</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                    </div>
                </Col>
                
        )
    }
}


export default Product;
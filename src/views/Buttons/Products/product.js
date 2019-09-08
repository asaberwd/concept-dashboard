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
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img style={{height: '200px', width: '100%', display: 'block'}} src="data:image/jpeg;base64,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" alt="Card image" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
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
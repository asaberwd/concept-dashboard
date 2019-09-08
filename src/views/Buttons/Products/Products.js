import React, { Component } from 'react';
import { Row } from 'reactstrap';

import axios from 'axios'
import Product from './product'

class Products extends Component {

    state = {

    }
    componentDidMount= ()=>{
        axios.get('http://localhost:3000/api/viewproducts')
        .then((res)=>{
            if(res.error){
                this.setState({
                    error : res.error
                })
                console.log('error===', res.error)
            }else{
                this.setState({
                    products : res.data.data
                })
                console.log('data===', res.data)
            }
            
        })
        .catch(err =>{
            console.log('error loading resource')
        })
    }

    render(){
        const { products, error } = this.state
        if(error){
            return(
            <div className="animated fadeIn">
                { error }
            </div>
            )
        }
        if(!products){
            return(
                <div className="animated fadeIn">
                { 'loading products' }
                </div>
            )
        }
        if(products){
            return(
                <div className="animated fadeIn">
                <Row>
                    { products.map((pro, key)=>{
                    return <Product key={key} pro={pro} />
                      }) }
                </Row>
                </div>
            )
        }
        
    }
}


export default Products;
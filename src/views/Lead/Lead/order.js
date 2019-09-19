import React from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Button, CardFooter, Form } from 'reactstrap';
import axios from 'axios'
import settings from './../../../assets/csvjson.json'



class MakeOrder extends React.Component {

    state ={
        orderProducts : [{productId: "0", name: '', price: 0, quantity: 1, total : 0}],
        total : 0,
        shipping : 0,
    }

    componentDidMount = ()=>{

      let getProducts = axios.get(`http://localhost:3000/api/viewproducts`)
      let getCompanies = axios.get(`http://localhost:3000/api/viewcompanies`)

      Promise.all([getProducts, getCompanies])
      .then( (result) =>{
        if(result[0].error || result[1].error){
          this.setState({
            error : result[0].error || result[1].error
        })
        console.log('error===', result[0].error, result[1].error)
        }else{
          this.setState({
            products : result[0].data.data,
            companies: result[1].data.data
          })
        console.log('data===', result)
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

    handleChange = async (event ) => {
        event.persist();

        //console.log('target===', event.target.selectedOptions[0].label)

        this.setState({
          [event.target.name]:event.target.value
        })

        if(event.target.name === 'company'){
          let company = this.state.companies.find((el)=>{
            return (el._id === event.target.value)
          })
          
          this.setState({
            shipping : company[this.state.gov]
          })
        }

        if(event.target.name === 'city'){
            this.setState({
                area: event.target.selectedOptions[0].label
            })
        }


        if(event.target.name === 'state'){
          if(event.target.value !== '0'){
           let valid = settings.cities.filter(st =>{
              return st.state_id == event.target.value
            })
    
            let cities = await settings.cities_translation.filter((city)=>{
              return ( city.lang === "en" &&  valid.some(el =>{
                return el.id == city.city_id
              }) )
            })
            this.setState({ cities, gov: event.target.selectedOptions[0].label })
          }
        }
      }

    addProduct = (event)=>{
        event.preventDefault()
        this.setState((prevState)=>({
            orderProducts:[...prevState.orderProducts, {product_id: "0", name: '', price: 0, quantity: 1, total : 0}]
        }))
    }

    handelChoose = (event) =>{
        const { products } = this.state
        let key = event.target.name.substring(7)
        console.log(key)
        let product = products.find((pro)=>{
            return pro._id === event.target.value
        })
        let kk = JSON.parse( JSON.stringify(this.state.orderProducts) )
        console.log('proooo', event.target.value, )
        let k = parseInt(key)
        kk[k].product_id = product._id
        kk[k].name = product.name
        kk[k].price = product.price
        kk[k].total = kk[k].price * kk[k].quantity

        let total = 0
        for(let i = 0; i< kk.length ; i++){
            total += kk[i].total
        }
        this.setState({
            orderProducts : kk,
            total
        })
    }

    handelUpdate = (event)=>{

        let kk = JSON.parse( JSON.stringify(this.state.orderProducts) )
        let key = event.target.name.substr(7,1)
        key = parseInt(key)
        let val = event.target.name.substring(8)
        kk[key][val] = parseInt(event.target.value)
        kk[key].total = kk[key].price * kk[key].quantity

        let total = 0
        for(let i = 0; i< kk.length ; i++){
            total += kk[i].total
        }

        this.setState({
            orderProducts : kk,
            total
        })
    }

    handelSubmit = (e)=>{

      e.preventDefault()

        axios.post('http://localhost:3000/api/addorder', this.state.orderProducts)
        .then((res)=>{
            console.log('res ===',res.data.data)
            this.setState({
                orderProducts : [{productId: "0", name: '', price: 0, quantity: 1, total : 0}],
                total : 0,
            })
        })
        .catch((err)=>{
            console.log('error : ', err)
            this.setState({
                error: err
              })
        })
    }

    


    render(){
        const { states, cities, products, orderProducts, total, companies } = this.state
        console.log('order state', this.state)
        return(
            <Col xs="12" sm="6">
            <Form onSubmit={this.handelSubmit}>
            <Card>
              <CardHeader>
                <strong> Create Order </strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">Name</Label>
                  <Input type="text" id="company" name="name" placeholder="Enter your company name" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup row className="my-0">
                <Col xs="6">
                    <FormGroup>
                    <Label htmlFor="company">select state</Label>
                    <Input type="select" name="state" id="select" onChange={this.handleChange}>
                    <option value="0">Please select</option>
                    {states ? states.map((state)=>{
                        return <option value={state.state_id}>{state.name}</option>
                    }):''}
                    </Input>
                    </FormGroup>
                </Col>

                <Col xs="6">
                    <FormGroup>
                    <Label htmlFor="city">select city</Label>
                    <Input type="select" name="city" id="select2" onChange={this.handleChange} >
                    <option value="0">Please select</option>
                    {cities ? cities.map((city)=>{
                        return <option value={city.id}>{city.name}</option>
                    }) :                   <option value="0">Please select</option>   }
                    </Input>
                    </FormGroup>
                </Col>

                </FormGroup>

                { orderProducts.map((val, key)=>{
                    let pro = `product${key}`
                    return(
                    <FormGroup row className="my-0 makeborder" key={key}>
                    <Col xs="4">
                    <FormGroup>
                        <Label htmlFor="company">select product</Label>
                        <Input type="select" name={pro} id="select2" value={val._id} onChange={this.handelChoose} >
                        <option value="0">select product</option>
                        {products ? products.map((product)=>{
                            return <option value={product._id}>{product.name}</option>
                        }) :       <option value="0">Please select</option>   }
                        </Input>
                    </FormGroup>
                    </Col>

                    <Col xs="2">
                    <FormGroup>
                        <Label htmlFor="company">quantity</Label>
                        <Input type="number" name={`${pro}quantity`} id="number2" min="0" value={val.quantity} onChange={this.handelUpdate} >
                        </Input>
                    </FormGroup>
                    </Col>

                    <Col xs="3">
                    <FormGroup>
                        <Label htmlFor="company">price</Label>
                        <Input type="number" name={`${pro}price`} id="number2" min="0" value={val.price} onChange={this.handelUpdate}>
                        </Input>
                    </FormGroup>
                    </Col>

                    <Col xs="3">
                        <Label htmlFor="company">total</Label>
                        <Input type="number" name={`${pro}total`} id="number2" min="0" value={val.total} disabled>
                        </Input>                    
                    </Col>
                    </FormGroup>
                    )
                })
                
                }

                    <FormGroup>
                        <Label htmlFor="company">select shipping company</Label>
                        <Input type="select" name="company" id="select5" onChange={this.handleChange} >
                        <option value="0">select company</option>
                        {companies ? companies.map((company)=>{
                            return <option value={company._id}>{company.name}</option>
                        }) :       <option value="0">No companies available</option>   }
                        </Input>
                        <Label htmlFor="company"> shipping cost </Label>
                        <Input type="text" name="shipping" id="disabled3" value={this.state.shipping} disabled >
                        </Input>
                    </FormGroup>

                <FormGroup row className="my-0">

                <Col xs="8">
                <FormGroup> 
                  <Label htmlFor="company">Order Total</Label>
                    <Input type="number" name="ordertotal" id="totals" min="0" value={total} disabled >
                    </Input>
                </FormGroup>
                </Col>

                <Col xs="4">
                <FormGroup>
                  <Label htmlFor="company">shipping cost</Label>
                  <Input type="text" name="shipping" id="disabled3" value={this.state.shipping} disabled >
                  </Input>
                </FormGroup>
                </Col>

                <Button className="btn btn-success btn-lg btn-block" onClick={this.addProduct} >add Product</Button>

                </FormGroup>

                <FormGroup>
                  <Label htmlFor="street"> Full Address </Label>
                  <Input type="textarea" name="fulladdress" id="street" placeholder="Enter street name" onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="street"> Comment </Label>
                  <Input type="textarea" name="comment" id="street" placeholder="Enter street name" onChange={this.handleChange} />
                </FormGroup>

              </CardBody>
              <CardFooter>
                <Input type="submit" className="btn btn-primary btn-lg btn-block" ><i className="fa fa-dot-circle-o"></i> Create Order </Input>
            </CardFooter>
            </Card>
          </Form>
          </Col>
        )
    }
}

export default MakeOrder
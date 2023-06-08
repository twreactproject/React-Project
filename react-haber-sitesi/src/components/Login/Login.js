import React, { Component } from 'react'
import {FormGroup, Form, Input, Label, Button, Card,CardHeader, CardBody, CardFooter} from 'reactstrap'

export default class Login extends Component {

    state = {
        username:"",
        password:"",

    }
    handleSubmit = (event) => {

        event.preventDefault();
        
     }
     onChangeHandler = (event) => {
       let name = event.target.name;
       let value = event.target.value;
       this.setState({[name]: value})
     }

  render() {
    return (
      <div>
        <center>
        <Card className='w-50' style={{marginTop:"80px"}}>
            <CardHeader>
     <h3 style={{textAlign:"center"}}>Giriş Yap</h3>
            </CardHeader>
            <CardBody>
            <Form onSubmit={this.handleSubmit}>
  <FormGroup>
    <Label for="username">
        Kullanıcı adınız veya E-mail adresiniz
    </Label>
    <Input
      id="username"
      name="username"
      placeholder="Kullanıcı adınız veya E-mail adresiniz"
      type="text"
      onChange={this.onChangeHandler}
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
        Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Şifreniz"
      type="password"
      onChange={this.onChangeHandler}
    />
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Beni Hatırla
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
  <FormGroup>
    <h3><a href='#'>Hesabınız yok mu? Hemen Oluşturalım</a></h3>
  </FormGroup>
</Form>
            </CardBody>
            <CardFooter>

            </CardFooter>
        </Card>
        </center>
      </div>
    )
  }
}
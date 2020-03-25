import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';
import toast from "toasted-notes";

class CreateAccountPage extends Component {
    constructor() {
        super()
        this.state = {
          userName: '',
          email: '',
          password: '',
          redirectTo: null,
          errorNameMsg: '',
          errorEmailMsg:'',
          errorPasswordMsg:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    // Set state to a user's created email and password
    handleSubmit(event) {
      console.log('Create account handleSubmit, email: ')
      console.log(this.state.email)
      event.preventDefault();

      // Request to server to add a new email/password
      axios
        .post('/user/', {
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password
        })
			  .then(response => {
          console.log("Response from create account submission:", response)
          if(response.data._id){
            toast.notify("Account successfully created. Please log in.", {
                    position: "top",
                    // This notification will automatically close
                    duration: 7000
                  });
            console.log('Account Successfully Created');
            this.setState({
              redirectTo: '/login'
            })
				  } else {
            let errorNameMsg = response.data.errors.userName ? response.data.errors.userName.message : ''
            let errorEmailMsg = response.data.errors.email ? response.data.errors.email.message  : ''
            let errorPasswordMsg = response.data.errors.password ? response.data.errors.password.message  : ''
            
            this.setState({
              errorNameMsg : errorNameMsg,
              errorEmailMsg : errorEmailMsg, 
              errorPasswordMsg : errorPasswordMsg
            });
          }
			}).catch(error => {
        toast.notify("Already an existing account with that email.", {
                    position: "top",
                    // This notification will automatically close
                    duration: 7000
                  });
				console.log('create account error: ', error)
			});
	}

render() {
  if (this.state.redirectTo) {
          return <Redirect to={{ pathname: this.state.redirectTo }} />
      } else {
      return (
        <Container>
          <Card className='create-act-card'>
            <CardHeader className='create-act-header'>
              Create Account
            </CardHeader>
              <CardBody className='create-act-body'>
                <Form className='create-act-form'>
                      <FormGroup>
                        <Label className='create-act-label' for='createUserName'>Name</Label>
                        <Input 
                          type='text' 
                          name='userName' 
                          id='createUserName' 
                          placeholder='John Doe'
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      {this.state.errorNameMsg ? (<p className='errormsg'>{this.state.errorNameMsg}</p> ):( <p></p>)}
                      <br></br>
                      <FormGroup>
                        <Label className='create-act-label' for='createUserEmail'>Email</Label>
                        <Input 
                          type='email' 
                          name='email' 
                          id='createUserEmail' 
                          placeholder='johndoe@example.com'
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      {this.state.errorEmailMsg ? (<p className='errormsg'>{this.state.errorEmailMsg}</p> ):( <p></p>)}
                      <br></br>
                      <FormGroup>
                        <Label className='create-act-label' for='createUserPassword'>Password</Label>
                        <Input 
                          type='password' 
                          name='password' 
                          id='createUserPassword' 
                          placeholder='password'
                          value={this.state.password}
                          onChange={this.handleChange} 
                        />
                      </FormGroup>
                      {this.state.errorPasswordMsg ? (<p className='errormsg'>{this.state.errorPasswordMsg}</p> ):( <p></p>)}
                    <br></br>
                  <Button
                    className='create-act-btn'
                    onClick={this.handleSubmit}
                    type='submit'>
                    Create Account
                  </Button>
                  <br></br>
                  <hr></hr>
                  <p className='already-account'>Already have an account? <Link to={`/login`} className='login-link'> Login </Link> </p>
              </Form>
            </CardBody>
          </Card>
        </Container>
      );
    }
  }
}

export default CreateAccountPage;
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';

class CreateAccountPage extends Component {
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          redirectTo: null
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
      event.preventDefault()

      // Request to server to add a new email/password
      axios.post('/user/', {
        email: this.state.email,
        password: this.state.password
      })
			.then(response => {
				console.log(response)
				if (!response.data.err) {
					console.log('successfully created account');
          alert('Account successfully created.');
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('email already used');
          alert('Email already used.');
				}
			}).catch(error => {
				console.log('create account error: ')
				console.log(error)
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
              <h2>Create Account</h2>
            </CardHeader>
              <CardBody className='create-act-body'>
                <Form className='create-act-form'>
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
                  {/* {this.handleSubmit && <h4 className='account-created'>Account successfully created.</h4>} */}
              </Form>
            </CardBody>
          </Card>
        </Container>
      );
    }
  }
}

export default CreateAccountPage;
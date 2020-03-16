import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './style.css';

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
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('email already used')
				}
			}).catch(error => {
				console.log('create account error: ')
				console.log(error)
			});
	}

render() {
    return (
      <Container>
      <br></br>
        <h2 className='create-act-header'>Create Account</h2>
          <Form>
            <Row form>
              <Col md={4}>
              <hr></hr>
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
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default CreateAccountPage;
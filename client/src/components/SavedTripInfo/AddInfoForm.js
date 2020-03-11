import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddInfoForm extends Component {
  
  state = {
    title: '',
    peopleOrDays: '',
    amount: ''
  };
  
  handleChange = event => {
    this.setState({
      title: event.target.value,
      peopleOrDays: event.target.value,
      amount: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addInfo(this.state.title);
    this.props.addInfo(this.state.peopleOrDays);
    this.props.addInfo(this.state.amount);
    
    this.setState({ 
        title: '', 
        peopleOrDays: '', 
        amount: ''
    });
  };

  render() {
    return (
        <Form>
            <FormGroup>
                <Label for="addActivity">Activity/Necessity:</Label>
                <Input 
                    type="text" 
                    name="addInfo" 
                    id="addActivity" 
                    placeholder="surf lessons" 
                    onChange={this.handleChange}
                    value={this.state.title}
                />
            </FormGroup>
            <FormGroup>
                <Label for="DaysOrPeople">How many people/days:</Label>
                <Input 
                    type="text" 
                    name="addInfo"
                    id="DaysOrPeople" 
                    placeholder="8 days" 
                    onChange={this.handleChange}
                    value={this.state.peopleOrDays}
                />
            </FormGroup>
            <FormGroup>
                <Label for="amountInput">Cost:</Label>
                <Input 
                    type="integer" 
                    name="addInfo" 
                    id="amountInput" 
                    placeholder="$" 
                    onChange={this.handleChange}
                    value={this.state.amount}
                />
            </FormGroup>
            <Button color="primary" onClick={this.handleSubmit}>Add</Button>
        </Form>
    )};
}

export default AddInfoForm;
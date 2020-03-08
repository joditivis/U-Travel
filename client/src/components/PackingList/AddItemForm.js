import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';

class AddItemForm extends Component {
  state = {
    title: ''
  };
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state);
    this.setState({ title: '' });
  };
  render() {
    return (
      <Form>
        <Input
          type="text"
          name="addItem"
          placeholder="Add new item..."
          onChange={this.handleChange}
          value={this.state.title}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default AddItemForm;

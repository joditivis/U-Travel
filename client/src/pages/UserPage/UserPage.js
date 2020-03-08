import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PackingList from '../../components/PackingList';
import AddItemForm from '../../components/AddItemForm';

class UserPage extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'Sunglasses',
        complete: false
      },
      {
        id: 2,
        title: 'Sunscreen',
        complete: 'false'
      },
      {
        id: 3,
        title: 'Snorkel',
        complete: 'false'
      }
    ]
  };

  deleteItem = id => {
    console.log(id);
    const items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = item => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({
      items
    });
  };

  render() {
    return (
      <Container>
        <AddItemForm addItem={this.addItem} />
        <Row>
          <PackingList items={this.state.items} deleteItem={this.deleteItem} />
        </Row>
      </Container>
    );
  }
}

export default UserPage;

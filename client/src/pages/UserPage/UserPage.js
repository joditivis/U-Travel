import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PackingList from '../../components/PackingList';

class UserPage extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'Sunglasses'
      },
      {
        id: 2,
        title: 'Sunscreen'
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

  render() {
    return (
      <Container>
        <Row>
          <PackingList items={this.state.items} deleteItem={this.deleteItem} />
        </Row>
      </Container>
    );
  }
}

export default UserPage;

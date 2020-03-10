import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import AddItemForm from '../../components/PackingList/AddItemForm';
import SavedTripInfoCard from '../../components/SavedTripInfo/SavedTripInfoCard';
import WeatherPage from '../WeatherPage/WeatherPage';

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
        complete: false
      },
      {
        id: 3,
        title: 'Snorkel',
        complete: false
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
    item.id = Math.floor(Math.random());
    item.complete = false;
    let items = [...this.state.items, item];
    this.setState({
      items
    });
  };

  markComplete = id => {
    console.log('markComplete', id);
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      })
    });
  };

  render() {
    return (
      <Container>
        <AddItemForm addItem={this.addItem} />
        <Row>
          <Col md={7}>
            <SavedTripInfoCard />
          </Col>
          <Col md={5}>
            <PackingList
              items={this.state.items}
              deleteItem={this.deleteItem}
              markComplete={this.markComplete}
            />
          </Col>
        </Row>
        <WeatherPage />
      </Container>
    );
  }
}

export default UserPage;

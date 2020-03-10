import React from 'react';
import { Col, Card, CardHeader, CardBody, Input, Button } from 'reactstrap';
import './style.css';

const PackingList = ({ items, deleteItem, markComplete }) => {
  const getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: items.complete ? 'line-through' : 'none'
    };
  };

  const packingList = items.length ? (
    items.map(item => {
      return (
        <Col key={item.id}>
          <Button
            className="remove"
            outline
            color="danger"
            size="sm"
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            X
          </Button>
          {item.title}
          <Input
            style={getStyle()}
            className="checkbox"
            type="checkbox"
            onClick={() => {
              markComplete(item.id);
            }}
          />
        </Col>
      );
    })
  ) : (
    <p>You are all packed!</p>
  );
  return (
    <Col>
      <Card>
        <CardHeader>Items I need to Pack</CardHeader>
        <CardBody>
          <span>{packingList}</span>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PackingList;

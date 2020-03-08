import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const PackingList = ({ items, deleteItem }) => {
  const packingList = items.length ? (
    items.map(item => {
      return (
        <p key={item.id}>
          <span
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            {item.title}
          </span>
        </p>
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
          <p>{packingList}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PackingList;

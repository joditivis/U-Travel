import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const PackingList = props => {
  return (
    <Col>
      <Card>
        <CardHeader>Items I need to Pack</CardHeader>
        <CardBody>
          <p>to pack 1</p>
          <p>to pack 2</p>
          <p>to pack 3</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PackingList;

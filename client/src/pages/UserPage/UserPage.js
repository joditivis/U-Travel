import React, { useState, UseEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList';

const UserPage = () => {
  return (
    <Container>
      <Row>
        <PackingList />
      </Row>
    </Container>
  );
};

export default UserPage;

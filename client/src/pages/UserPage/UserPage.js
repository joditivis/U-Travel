import React from 'react';
import { Container, Row } from 'reactstrap';
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

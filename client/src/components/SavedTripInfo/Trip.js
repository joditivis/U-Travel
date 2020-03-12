import React from 'react';
import { Button, Form, FormGroup, Input, Table } from 'reactstrap';

const Trip = ({ trip, index, removeTrip }) => {
  return (
    <Table>
      <tbody>
      <tr>
        <td>{trip.title}</td>
        <td>{trip.peopleOrDays}</td>
        <td>{trip.amount}</td>
          <td>  <Button
            className="remove-button"
            size="sm"
            onClick={() => removeTrip(index)}
          >
            <i className="fas fa-trash-alt"></i>
          </Button></td>
      </tr>
      {/* <span>{trip.title}</span>
      <span>{trip.peopleOrDays}</span>
      <span>{trip.amount}</span> */}
      </tbody>
    </Table>
  );
};

export default Trip;

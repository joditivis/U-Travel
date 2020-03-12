import React from 'react';
import { Button } from 'reactstrap';

const Trip = ({ trip, index, removeTrip }) => {
  return (
    <tbody>
      <tr>
        <td>{trip.title}</td>
        <td>{trip.peopleOrDays}</td>
        <td>${trip.amount}</td>
        <td>
          <Button
            className="remove-button"
            size="sm"
            onClick={() => removeTrip(index)}
          >
            <i className="fas fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default Trip;

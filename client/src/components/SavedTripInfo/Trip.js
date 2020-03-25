import React from "react";
import { Button } from "reactstrap";
import "./style.css";

const Trip = ({ trip, index, removeTrip, remove }) => {
  return (
    <tbody>
      <tr>
        <td>{trip.title}</td>
        {/* <td>{trip.peopleOrDays}</td> */}
        <td>${trip.amount.$numberDecimal}</td>
        <td>
          {remove ? (
            <Button
              className="remove-button"
              size="sm"
              onClick={() => removeTrip(index)}
            >
              <i className="fas fa-trash-alt"></i>
            </Button>
          ) : (
            <div></div>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default Trip;

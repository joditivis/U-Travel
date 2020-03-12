import React, { useState } from 'react';
import AddTripForm from '../SavedTripInfo/AddTripForm';
import Trip from '../SavedTripInfo/Trip';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

const TripInfo = () => {
  const [trips, setTrip] = useState([
    {
      title: 'Surfing',
      peopleOrDays: 5,
      amount: 100
    },
    {
      title: 'Hiking',
      peopleOrDays: 2,
      amount: 30
    },
    {
      title: 'Helicopter Tour',
      peopleOrDays: 4,
      amount: 5000
    }
  ]);

  const addTrip = (title, peopleOrDays, amount) => {
    console.log('add trip', { title, peopleOrDays, amount });
    const newTrip = [...trips, { title, peopleOrDays, amount }];
    setTrip(newTrip);
  };

  const removeTrip = index => {
    console.log('remove trip', index);
    const newTrip = [...trips];
    newTrip.splice(index, 1);
    setTrip(newTrip);
  };

  return (
    <Card>
      <CardHeader>Planned trip to Kailua Kona, HI</CardHeader>
      <CardHeader>Add to my trip</CardHeader>
      <AddTripForm addTrip={addTrip} />
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Activity</th>
              <th>People/Days</th>
              <th>Cost</th>
              <th>Remove</th>
            </tr>
          </thead>
          {trips.map((trip, index) => (
            <Trip
              key={index}
              index={index}
              trip={trip}
              removeTrip={removeTrip}
            />
          ))}
        </Table>
      </CardBody>
    </Card>
  );
};

export default TripInfo;
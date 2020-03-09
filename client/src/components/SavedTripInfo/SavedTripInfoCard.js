import React from 'react';
import { Card, CardHeader, CardBody,
        Table,
       } from 'reactstrap';
import AddInfoModal from './AddInfoModal';


const SavedTripInfoCard = (props) => {

  return (
    <div>
      <Card>
        <CardHeader>Planned trip to Kailua Kona, HI</CardHeader>
            <CardBody>
                <Table striped>
                    <thead>
                        <tr>
                        <th>Item</th>
                        <th></th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><h5>Flights</h5></td>
                        <td> 2 travelers</td>
                        <td>$980</td>
                        </tr>
                        <tr>
                        <td><h5>Rental Car</h5></td>
                        <td></td>
                        <td>$654</td>
                        </tr>
                        <tr>
                        <td><h5>Hotel</h5></td>
                        <td>8 nights</td>
                        <td>$1,402</td>
                        </tr>
                        <tr>
                        <td><h5>Helicopter Tour</h5></td>
                        <td></td>
                        <td>$500</td>
                        </tr>
                        <tr>
                        <td><h5>Food</h5></td>
                        <td>9 days</td>
                        <td>$750</td>
                        </tr>
                    </tbody>
                </Table>
                <AddInfoModal />
            </CardBody>
      </Card>
    </div>
  )};

  export default SavedTripInfoCard;
import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import SavedTripTable from './SavedTripTable';
import AddInfoModal from './AddInfoModal';



class SavedTripInfoCard extends Component {


render () {
  return (
    <div>
      <Card>
        <CardHeader>Planned trip to Kailua Kona, HI</CardHeader>
            <CardBody>
                <SavedTripTable />
                <AddInfoModal />
            </CardBody>
      </Card>
    </div>
  )};
}

export default SavedTripInfoCard;
import React, { useState } from 'react';
import { Card, CardHeader, CardBody,
        Table,
        Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input
       } from 'reactstrap';


const SavedTripInfoCard = (props) => {

// modal functionality
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
                
                {/* Modal */}
                <div>
                    <Button color="primary" onClick={toggle}>{buttonLabel}Add to my trip</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Add To My Trip</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="addActivity">Activity/Necessity</Label>
                                            <Input type="text" name="addActivity" id="addActivity" placeholder="surf lessons" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="amountInput">Amount</Label>
                                            <Input type="text" name="amountInput" id="amountInput" placeholder="$" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Add</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                </div>
            </CardBody>
      </Card>
    </div>
  )};

  export default SavedTripInfoCard;
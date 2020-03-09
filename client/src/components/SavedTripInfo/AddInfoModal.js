import React, { useState } from 'react';
import {
        Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input
       } from 'reactstrap';


const AddInfoModal = (props) => {

    // modal functionality
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
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
    )};

  export default AddInfoModal;
import React, { useState } from 'react';
import {
        Button, Modal, ModalHeader, ModalBody, ModalFooter
       } from 'reactstrap';
import AddInfoForm from './AddInfoForm';


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
                            <AddInfoForm />
                        </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Add</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )};

  export default AddInfoModal;
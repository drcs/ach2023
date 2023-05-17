import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Room(props) {
    const [show, setShow] = useState(false);

    const [phase, setPhase] = useState(1);
    const nextPhase = () => setPhase(phase + 1);

    const handleClose = () => {setShow(false); setPhase(1); }
    const handleShow = () => {setShow(true); setPhase(1); }

    return (
    <>
      <div className="room" style={{top: props.y + "px", left: props.x + "px"}} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stuff you should know about {props.roomName}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <ModalBody phase={phase} ach={props.ach} roomName={props.roomName}/>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>Turn On Purifiers</Button>
            <Button onClick={nextPhase}>Next</Button>
        </Modal.Footer>
      </Modal>
      </>
      );
    }

function ModalBody(props) {
    if (props.phase === 1) {
      return <>{props.ach} air changes per hour going on in {props.roomName}</>;
    } else if (props.phase === 2) {
      return <>That's a lot of air changes</>;
    } else {
      return <>(the end)</>;
    }
}

export default Room;

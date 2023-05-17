import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Room({room}) {
    const [show, setShow] = useState(false);

    const maxPhase = 2;

    const [phase, setPhase] = useState(1);
    const nextPhase = () => {
        setPhase(phase + 1);
        if (phase > maxPhase) {
            handleClose();
        }
    }

    const handleClose = () => {setShow(false); setPhase(1); }
    const handleShow = () => {setShow(true); setPhase(1); }

    return (
    <>
      <div className="room" style={{top: room.y + "px", left: room.x + "px"}} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stuff you should know about {room.name}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <ModalBody phase={phase} room={room} />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>Turn On Purifiers</Button>
            <Button onClick={nextPhase}>Next</Button>
        </Modal.Footer>
      </Modal>
      </>
      );
    }

function ModalBody({room, phase}) {
    if (phase === 1) {
      return <>{room.ach} air changes per hour going on in {room.name}</>;
    } else if (phase === 2) {
      return <>That's a lot of air changes</>;
    } else {
      return <>(the end)</>;
    }
}

export default Room;

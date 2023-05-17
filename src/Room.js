import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Room(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>
      <div className="room" style={{top: props.y + "px", left: props.x + "px"}} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stuff you should know about {props.roomName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.ach} air changes per hour going on in {props.roomName}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Turn On Purifiers</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Room;

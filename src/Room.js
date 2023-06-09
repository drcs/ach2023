import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GaugeChart from 'react-gauge-chart';

function Room({room}) {
    const [show, setShow] = useState(false);
    const [phase, setPhase] = useState(1);

    const maxPhase = 2;

    const handleNext = () => {
        if (phase >= maxPhase) {
            handleClose();
        } else {
            setPhase(phase + 1);
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
            <Button onClick={handleNext}>Next</Button>
        </Modal.Footer>
      </Modal>
      </>
      );
    }

function ModalBody({room, phase}) {
  switch (phase) {
    case 1:
      return <>
        <GaugeChart nrOfLevels={12} percent={room.ach / 12.0} textColor="#888888" formatTextValue={value => (Math.floor(value / 100.0 * 12.0 * 10.0) / 10.0) + ' ach'}/>
        {room.ach} air changes per hour going on in {room.name}
      </>;
    case 2:
      return <>That's a lot of air changes</>;
  }
  return <></>;
}

export default Room;

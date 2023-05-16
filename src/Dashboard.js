import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Room from './Room';

const Dashboard = () => {

    return (
      <>
       <Jumbotron>
        <div className="row">
            <div className="col-md-6">
                Name:
            </div>
            <div className="col-md-6">
                First Last
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                Age:
            </div>
            <div className="col-md-6">
                99
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                Occupation:
            </div>
            <div className="col-md-6">
                blah blah blah
            </div>
        </div>
        </Jumbotron>
        <Card>
            <div className="image-container">
                <Room x="200" y="350" roomName="Eleanor Roosevelt's Room"/>
                <Room x="280" y="320" roomName="Winston Churchill's Room"/>
                <Room x="360" y="290" roomName="Megan Thee Stallion's Room"/>
            <Image src="hayhurst.png" />
            </div>
        </Card>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Project 1
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blah</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Project 2
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blah</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Project 3
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah
                blah blahblah blahblah blahblah blahblah blahblah blahblah blah</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>
    )
}

export default Dashboard

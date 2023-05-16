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
                    Some Things To Know
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Some More Things To Know
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>
    )
}

export default Dashboard

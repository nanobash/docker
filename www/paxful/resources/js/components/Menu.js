import React from 'react';
import {Row, Col, Navbar, Nav} from 'react-bootstrap';

export default class Menu extends React.Component
{
    render() {
        return (
            <Row className={"dashboard-menu"}>
                <Col md={12}>
                    <Navbar expand={"md"}>
                        <Nav.Link>Overview</Nav.Link>
                        <Nav.Link>Trades</Nav.Link>
                        <Nav.Link>Disputes</Nav.Link>
                        <Nav.Link>Your offers</Nav.Link>
                        <Nav.Link>My team</Nav.Link>
                        <Nav.Link>Trade History</Nav.Link>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}

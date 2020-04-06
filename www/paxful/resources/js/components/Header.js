import React from 'react';
import {Row, Col, Navbar, Nav} from 'react-bootstrap';

export default class Header extends React.Component
{
    render() {
        return (
            <Row className={"dashboard-header"}>
                <Col md={2}>
                    <h1>
                        <svg enable-background="new 0 0 123.7 23.3" viewBox="0 0 123.7 23.3"
                             xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <path d="m91.3 1.7v10.3c0 3.6 1.5 5 4.1 5s4.1-1.5 4.1-5v-10.3h4.3v10.4c0 5.5-3.1 8.5-8.4 8.5-5.2 0-8.4-3-8.4-8.5v-10.4zm-59.8 0 8.3 18.6h-4.5l-1.7-4h-8.6l-1.7 4h-4.4l8.3-18.6zm49.7 0v3.5h-9.7v4.9h8.5v3.5h-8.5v6.8h-4.3v-18.7zm32.8 0v15.1h9.7v3.5h-14v-18.6zm-105.9 0c4.9 0 8.1 2.5 8.1 6.8 0 4.1-3.1 6.7-8.1 6.7h-3.8v5.2h-4.3v-18.7zm47 9.9 6.3 8.7h-4.1c-.6 0-1.2-.2-1.6-.7l-.1-.1-2.3-3.2c-.5-.8-.5-1.8 0-2.6l.1-.2zm-25.8-5.6-2.9 7.1h5.9zm-21.4-.8h-3.6v6.5h3.5c2.7 0 4-1.2 4-3.2s-1.3-3.3-3.9-3.3zm39-3.5c.7 0 1.2.2 1.6.7l.1.1 1.2 1.7c.5.7.5 1.7.1 2.4l-.1.1-1.7 2.4-5.4-7.5z"/>
                            <path d="m63.1 0-21.6 23.2c-.2.3-.7-.1-.4-.4l15.6-22c.4-.5 1-.8 1.7-.8z" fill="#ffffff"/>
                        </svg>
                    </h1>
                </Col>
                <Col md={10}>
                    <Navbar expand={"md"} className={"dashboard-header-nav"}>
                        <Nav.Link href={"#"}>Buy bitcoins</Nav.Link>
                        <Nav.Link href={"#"}>Sell bitcoins</Nav.Link>
                        <Nav.Link href={"#"}>Wallet</Nav.Link>
                        <Nav.Link href={"#"}>Support</Nav.Link>
                        <Nav.Link href={"#"}>Your account</Nav.Link>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}

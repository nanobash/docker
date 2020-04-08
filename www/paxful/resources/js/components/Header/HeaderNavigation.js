import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class HeaderNavigation extends React.Component
{
    render() {
        return (
            <Navbar expand={"md"} className={"dashboard-header-nav"}>
                <Nav.Link href={"#"}>Buy bitcoins</Nav.Link>
                <Nav.Link href={"#"}>Sell bitcoins</Nav.Link>
                <Nav.Link href={"#"}>Wallet</Nav.Link>
                <Nav.Link href={"#"}>Support</Nav.Link>
                <Nav.Link href={"#"}>Your account</Nav.Link>
            </Navbar>
        );
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/dashboard.scss';
import Header from './Header';
import Menu from './Menu';

class Dashboard extends React.Component
{
    render() {
        return (
            <Container fluid={"md"}>
                <Header />
                <Menu />
                <Row>
                    <Col md={3}>Left side</Col>
                    <Col md={6}>Middle side</Col>
                    <Col md={3}>Right side</Col>
                </Row>
                <Row>
                    <Col md={12}>
                        Footer
                    </Col>
                </Row>
            </Container>
        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

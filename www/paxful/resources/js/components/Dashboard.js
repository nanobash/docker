import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/dashboard.scss';
import Header from './Header';
import Menu from './Menu';
import Trade from "./Trade";

class Dashboard extends React.Component
{
    render() {
        const trades = [
            {
                id: 10,
                username: 'Jannie Smith',
                paymentMethod: 'PayPal',
                amount: 12000,
                bitcoin: 2.26,
                status: 'PAID'
            },
            {
                id: 12,
                username: 'John Doe',
                paymentMethod: 'Amazon Gift Card',
                amount: 5100,
                bitcoin: 1.2,
                status: 'NOT PAID'
            },
            {
                id: 15,
                username: 'Kate Smith',
                paymentMethod: 'iTunes Gift Card',
                amount: 20,
                bitcoin: 0.00003,
                status: 'PAID'
            },
            {
                id: 16,
                username: 'Jimmy Doe',
                paymentMethod: 'Mastercard',
                amount: 20000,
                bitcoin: 5.45003,
                status: 'PAID'
            }
        ];

        return (
            <Container fluid={"md"} className={"dashboard-container"}>
                <Header />
                <Menu />
                <Row>
                    <Col md={3} className={"dashboard-article-trades"}>
                        {trades.map(trade => <Trade item={trade} key={trade.id} />)}
                    </Col>
                    <Col md={6} className={"dashboard-section"}>
                        Middle side
                    </Col>
                    <Col md={3} className={"dashboard-aside-trades"}>
                        Right side
                    </Col>
                </Row>
            </Container>
        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

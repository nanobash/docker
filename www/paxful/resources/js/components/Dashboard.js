import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/dashboard.scss';
import Header from './Header';
import Menu from './Menu';
import Trade from './Trade';
import SectionHeader from './SectionHeader';

class Dashboard extends React.Component
{
    render() {
        const trades = [
            {
                id: 10,
                username: 'Jannie Smith',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 12000,
                bitcoin: 2.26,
                paymentMethod: 'PayPal',
                paymentStatus: 'PAID',
            },
            {
                id: 12,
                username: 'John Doe',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 5100,
                bitcoin: 1.2,
                paymentMethod: 'Amazon Gift Card',
                paymentStatus: 'NOT PAID',
            },
            {
                id: 15,
                username: 'Kate Smith',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 20,
                bitcoin: 0.00003,
                paymentMethod: 'iTunes Gift Card',
                paymentStatus: 'PAID',
            },
            {
                id: 16,
                username: 'Jimmy Doe',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 20000,
                bitcoin: 5.45003,
                paymentMethod: 'Mastercard',
                paymentStatus: 'PAID',
            }
        ];

        const trade = trades[1];

        return (
            <Container fluid={"md"} className={"dashboard-container"}>
                <Header />
                <Menu />
                <Row>
                    <Col md={3} className={"dashboard-article-trades"}>
                        {trades.map(trade => <Trade item={trade} key={trade.id} />)}
                    </Col>
                    <Col md={6} className={"dashboard-section"}>
                        <SectionHeader trade={trade} />
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

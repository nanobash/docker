import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/dashboard.scss';
import HeaderNavigation from './Header/HeaderNavigation';
import Menu from './Header/Menu';
import Trade from './Trade';
import SectionHeader from './Section/SectionHeader';
import SectionContent from './Section/SectionContent';
import SectionTextarea from './Section/SectionTextarea';
import Logo from "./Header/Logo";

class Dashboard extends React.Component
{
    sectionContentComments() {
        // Faking comments, that actually should come from elsewhere, like from database for example
        return [
            {
                reply: false,
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam urna, vulputate at' +
                    'aliquam non, placerat nec odio. Morbi placerat arcu id ligula interdum tristique. Suspendisse ac' +
                    'tempus felis.',
                time: '14:20 pm'
            },
            {
                reply: true,
                comment: 'Suspendisse ac augue ullamcorper, pellentesque libero vel, efficitur lorem. Nam mollis ligula' +
                    'eget sapien sollicitudin dictum.',
                time: '14:05 pm'
            },
            {
                reply: true,
                comment: 'Praesent aliquam ac dui eget tristique. Nam vel lorem a justo semper faucibus. Quisque et leo' +
                    'in diam convallis aliquet at id sapien. Fusce egestas accumsan est venenatis pretium. In non ' +
                    'efficitur tellus. Nam ac neque accumsan, vestibulum leo et, blandit sapien. Pellentesque at lorem ' +
                    'eleifend, hendrerit justo id, ultricies nunc. Sed orci dolor, molestie quis pharetra ut, feugiat ' +
                    'nec tortor. Etiam at cursus tellus, ac congue nisl. Integer scelerisque in orci molestie faucibus.' +
                    'Donec eros est, laoreet vel ligula non, fermentum dapibus ipsum. Donec aliquet mollis lacus,' +
                    'commodo rutrum leo porta sed. Aliquam et enim in lorem laoreet vulputate. Quisque iaculis finibus ' +
                    'porttitor.',
                time: '12:00 pm'
            },
            {
                reply: false,
                comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' +
                    'Nunc gravida dapibus ante vel mollis. Sed quis ante eget libero volutpat luctus sit amet id tellus.' +
                    'Praesent fermentum volutpat hendrerit. Nunc varius dolor velit, in ullamcorper ante pharetra vel.' +
                    'Morbi scelerisque imperdiet ligula, sit amet sollicitudin magna dignissim non. Proin turpis erat,' +
                    'porttitor eu viverra vel, maximus non eros. Sed finibus velit fringilla ex rutrum, in tempor' +
                    'elit accumsan.',
                time: '11:45 am'
            },
            {
                reply: true,
                comment: 'Pellentesque vitae gravida lacus. Nulla felis lacus, molestie at sapien maximus,' +
                    'iaculis porta est. Sed ac ipsum sagittis, commodo mi at, tempor augue.',
                time: '11:30 am'
            },
            {
                reply: true,
                comment: 'Duis sagittis turpis at tortor malesuada vehicula.',
                time: '11:00 am'
            },
            {
                reply: false,
                comment: 'Sed quis neque bibendum, scelerisque enim ut, sagittis lacus.',
                time: '10:55 am'
            },
            {
                reply: true,
                comment: 'Praesent mollis hendrerit commodo.',
                time: '10:40 am'
            }
        ];
    }

    render() {
        const trades = [
            {
                id: 10,
                username: 'Jannie Smith',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 12000,
                bitcoin: 2.26000312,
                paymentMethod: 'PayPal',
                paymentStatus: 'PAID',
            },
            {
                id: 12,
                username: 'John Doe',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 5100,
                bitcoin: 1.12000002,
                paymentMethod: 'Amazon Gift Card',
                paymentStatus: 'NOT PAID',
            },
            {
                id: 15,
                username: 'Kate Smith',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 20,
                bitcoin: 0.00000312,
                paymentMethod: 'iTunes Gift Card',
                paymentStatus: 'PAID',
            },
            {
                id: 16,
                username: 'Jimmy Doe',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 20000,
                bitcoin: 5.30003011,
                paymentMethod: 'Mastercard',
                paymentStatus: 'PAID',
            },
            {
                id: 17,
                username: 'Dummy Doe',
                reputationPlus: 37,
                reputationMinus: 1,
                amountUSD: 201,
                bitcoin: 0.26000401,
                paymentMethod: 'Mastercard',
                paymentStatus: 'PAID',
            }
        ];

        const trade = trades[1];

        return (
            <Container fluid={"md"} className={"dashboard-container"}>
                <Row className={"dashboard-header"}>
                    <Col md={2}>
                        <Logo />
                    </Col>

                    <Col md={10}>
                        <HeaderNavigation />
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className={"dashboard-menu"}>
                        <Menu />
                    </Col>
                </Row>

                <Row>
                    <Col md={3} className={"dashboard-article-trades"}>
                        {trades.map(trade => <Trade item={trade} key={trade.id} />)}
                    </Col>

                    <Col md={6} className={"dashboard-section"}>
                        <SectionHeader trade={trade} />

                        <div className={"section-content"}>
                            {this.sectionContentComments().map(
                                (v, i) => <SectionContent comment={v} key={i}/>
                            )}
                        </div>

                        <SectionTextarea />
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

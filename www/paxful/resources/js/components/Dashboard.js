import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/dashboard.scss';
import Header from './Header';
import Menu from './Menu';
import Trade from './Trade';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';
import SectionTextarea from './SectionTextarea';

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

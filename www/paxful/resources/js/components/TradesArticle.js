import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Trade from "./Trade";

export default class TradesArticle extends React.Component
{
    render() {
        const {trades} = this.props;

        return (
            <Col md={3} className={"dashboard-trades-article"}>
                {trades.map(trade => <Trade item={trade} key={trade.id} />)}
            </Col>
        );
    }
}

import React from 'react';
import {Button} from 'react-bootstrap';
import {FaUserTie} from 'react-icons/fa';

export default class AsideTrade extends React.Component
{
    render() {
        const {trade} = this.props;

        return (
            <>
                <div className={"aside-trade-title"}>
                    You are trading with <span>{trade.username}</span>

                    <p>Started 23 minutes ago</p>
                </div>

                <div className={"aside-trade-button"}>
                    <Button variant={"outline-success"}>Release bitcoins</Button>
                </div>

                <div className={"aside-trade-details"}>
                    <div>
                        <div className={"aside-trade-details-user"}>
                            <FaUserTie />

                            <p>
                                <span>+{trade.reputationPlus}</span> / <span>-{trade.reputationMinus}</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className={"aside-trade-details-number-of-trades"}>
                            # OF TRADES

                            <p className={"dashboard-title-light"}>{4}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            TRADE STATUS

                            <p className={trade.paymentStatus === 'PAID' ? 'green' : 'red'}>
                                {trade.paymentStatus}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            TRADE HASH

                            <p className={"dashboard-title-light"}>
                                45aFD3Rr
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            AMOUNT USD

                            <p className={"dashboard-title-light"}>{trade.amountUSD}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            AMOUNT BTC

                            <p className={"dashboard-title-light"}>{trade.bitcoin}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

import React from 'react';
import {Button} from 'react-bootstrap';
import {FaUserTie} from 'react-icons/fa';

export default class TradeDetails extends React.Component
{
    render() {
        const {details} = this.props;

        return (
            <>
                <div className={"aside-trade-title"}>
                    You are trading with <span>{details.user.username}</span>

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
                                <span>+{details.user.reputation_plus}</span> / <span>{details.user.reputation_minus}</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className={"aside-trade-details-number-of-trades"}>
                            # OF TRADES

                            <p className={"dashboard-title-light"}>{details.user.trades_count}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            TRADE STATUS

                            <p className={details.status ? 'green' : 'red'}>
                                {details.status ? 'PAID' : 'NOT PAID'}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            TRADE HASH

                            <p className={"dashboard-title-light"}>
                                {details.hash.substring(0, 10)}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            AMOUNT USD

                            <p className={"dashboard-title-light"}>{details.amount.USD}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            AMOUNT BTC

                            <p className={"dashboard-title-light"}>{details.satoshis.bitcoin}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

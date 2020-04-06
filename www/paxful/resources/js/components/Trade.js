import React from 'react';
import {IconContext} from 'react-icons';
import {GoPrimitiveDot} from 'react-icons/go';
import {FaBitcoin} from 'react-icons/fa';
import {IoLogoUsd} from 'react-icons/io';
import {FaUserSecret} from 'react-icons/fa';

export default class Trade extends React.Component
{
    render() {
        const {item} = this.props;

        return (
            <div className={"dashboard-trade-item"}>
                <div className={"dashboard-trade-item-username"}>
                    <IconContext.Provider value={{ color: "green" }}>
                        <GoPrimitiveDot />
                    </IconContext.Provider>

                    {item.username} is buying
                </div>

                <div className={"dashboard-trade-item-payment-method"}>
                    {item.paymentMethod}
                </div>

                <div className={"dashboard-trade-item-amount"}>
                    {item.amount}
                    <IconContext.Provider value={{ color: "green", size: "0.9rem" }}>
                        <IoLogoUsd />
                    </IconContext.Provider>
                    {' '}
                    {item.bitcoin}
                    {' '}
                    <IconContext.Provider value={{ color: "orange", size: "1rem"}}>
                        <FaBitcoin />
                    </IconContext.Provider>
                </div>

                <div className={"dashboard-trade-item-user"}>
                    <FaUserSecret />
                    <span className={item.status === 'PAID' ? 'paid' : 'not-paid'}>{item.status}</span>
                </div>
            </div>
        );
    }
}

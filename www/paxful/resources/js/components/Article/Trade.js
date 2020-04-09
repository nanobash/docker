import React from 'react';
import {IconContext} from 'react-icons';
import {GoPrimitiveDot} from 'react-icons/go';
import {FaBitcoin} from 'react-icons/fa';
import {IoLogoUsd} from 'react-icons/io';
import {FaUserSecret} from 'react-icons/fa';
import {IoMdCheckmarkCircle} from 'react-icons/io';
import {MdCancel} from 'react-icons/md';

export default class Trade extends React.Component
{
    render() {
        const {item} = this.props;

        return (
            <div className={"article-trade-item"}>
                <div className={"article-trade-item-title"}>
                    <IconContext.Provider value={{color: item.paymentStatus === 'PAID' ? "green" : "gray"}}>
                        <GoPrimitiveDot />
                    </IconContext.Provider>

                    {item.username} is buying
                </div>

                <div className={"article-trade-item-payment-method"}>
                    {item.paymentMethod}
                </div>

                <div className={"article-trade-item-amount"}>
                    {item.amountUSD}
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

                <div className={"article-trade-item-user"}>
                    <FaUserSecret />

                    {item.paymentStatus === 'PAID' &&
                        <IconContext.Provider value={{color: "green"}}>
                            <IoMdCheckmarkCircle />
                        </IconContext.Provider>
                    }

                    {item.paymentStatus === 'NOT PAID' &&
                        <IconContext.Provider value={{color: "red"}}>
                            <MdCancel />
                        </IconContext.Provider>
                    }
                </div>
            </div>
        );
    }
}

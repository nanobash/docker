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
                    <IconContext.Provider value={{color: item.status ? "green" : "gray"}}>
                        <GoPrimitiveDot />
                    </IconContext.Provider>

                    {item.user.username} is buying
                </div>

                <div className={"article-trade-item-payment-method"}>
                    {item.payment_method}
                </div>

                <div className={"article-trade-item-amount"}>
                    {item.amount.USD}
                    <IconContext.Provider value={{ color: "green", size: "1.2em" }}>
                        <IoLogoUsd />
                    </IconContext.Provider>
                    {' '}
                    {item.satoshis.bitcoin}
                    {' '}
                    <IconContext.Provider value={{ color: "orange", size: "1.2em"}}>
                        <FaBitcoin />
                    </IconContext.Provider>
                </div>

                <div className={"article-trade-item-user"}>
                    <FaUserSecret />

                    {item.status &&
                        <IconContext.Provider value={{color: "green"}}>
                            <IoMdCheckmarkCircle />
                        </IconContext.Provider>
                    }

                    {!item.status &&
                        <IconContext.Provider value={{color: "red"}}>
                            <MdCancel />
                        </IconContext.Provider>
                    }
                </div>
            </div>
        );
    }
}

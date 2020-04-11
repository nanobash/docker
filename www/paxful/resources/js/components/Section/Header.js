import React from 'react';
import {MdDelete} from 'react-icons/md';
import {IconContext} from 'react-icons';

export default class Header extends React.Component
{
    render() {
        const {details} = this.props;

        return (
            <div className={"section-header"}>
                <div className={"section-header-delete-icon"}>
                    <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                        <MdDelete />
                    </IconContext.Provider>
                </div>

                <div className={"section-header-payment-method"}>
                    {details.payment_method}
                </div>

                <div className={"section-header-username"}>
                    {details.user.username}
                    {' '}
                    <span className={"green"}>+{details.user.reputation_plus}</span>
                    {' / '}
                    <span className={"red"}>-{details.user.reputation_minus}</span>
                </div>
            </div>
        );
    }
}

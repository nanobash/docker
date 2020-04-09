import React from 'react';
import {MdDelete} from 'react-icons/md';
import {IconContext} from 'react-icons';

export default class SectionHeader extends React.Component
{
    render() {
        const {trade} = this.props;

        return (
            <div className={"section-header"}>
                <div className={"section-header-delete-icon"}>
                    <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                        <MdDelete />
                    </IconContext.Provider>
                </div>

                <div className={"section-header-payment-method"}>
                    {trade.paymentMethod}
                </div>

                <div className={"section-header-username"}>
                    {trade.username}
                    {' '}
                    <span className={"green"}>+{trade.reputationPlus}</span>
                    {' / '}
                    <span className={"red"}>-{trade.reputationMinus}</span>
                </div>
            </div>
        );
    }
}

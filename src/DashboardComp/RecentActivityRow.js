import React from 'react';
import {ArrowUpLeft, ArrowDownRight} from 'react-bootstrap-icons';

const RecentActivityRow = ({currency, timeOfTrans, amount, completed}) => {
    return (
        <>
            <tr>
                <td>{amount >= 0 ? <ArrowUpLeft /> : <ArrowDownRight />}</td>
                <td>{currency}</td>
                <td>{timeOfTrans}</td>
                <td>{amount}</td>
                <td>{completed ? "Completed" : "Pending" }</td>
            </tr>
        </>
    )
}

const RecentActivityData = [
    {
        currency: "Bitcoin",
        timeOfTrans: "10:42:23 AM",
        amount: +1545.44,
        completed: true
    },
    {
        currency: "Cash",
        timeOfTrans: "10:42:23 AM",
        amount: +1545.44,
        completed: true
    },
    {
        currency: "GOOGL",
        timeOfTrans: "10:42:23 AM",
        amount: -743.21,
        completed: true
    },
]

export {RecentActivityData, RecentActivityRow}
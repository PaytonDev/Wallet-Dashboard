import React from 'react';
import {CurrencyDollar, GraphUp, CurrencyBitcoin, ThreeDotsVertical} from 'react-bootstrap-icons';
import "./Currency.css";


const Currency = ({name, value, icon, percentChange}) => {
    return (
            <div className="Currency">
                <div className='Currency-header'>
                    <div>
                        {icon}
                    </div>
                    <div className='Currency-name'>{name}</div>
                    <ThreeDotsVertical className="Currency-menu"/>
                </div>
                <div className="Currency-value">${value}</div>
                <small><span>{percentChange}% </span>This week</small>
            </div>
    )
}

const currencyArray = [
    {
        name: "Cash",
        icon: <CurrencyDollar className="Currency-icon"/>,
        value: 8500,
        percentChange: 45,
    },
    {
        name: "Stocks",
        icon: <GraphUp className="Currency-icon"/>,
        value: 2200,
        percentChange: 35,  
    },
    {
        name: "Crypto",
        icon: <CurrencyBitcoin className="Currency-icon"/>,
        value: 6000,
        percentChange: 21,  
    },
]

export {Currency, currencyArray};
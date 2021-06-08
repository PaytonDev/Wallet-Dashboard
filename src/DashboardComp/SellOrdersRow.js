import React from 'react';

const SellOrdersRow = ({price, amount, total}) => {
    return (
        <>
            <tr>
                <td>${price}</td>
                <td>{amount}</td>
                <td>${total}</td>
            </tr>
        </>
    )
}

const SellOrdersTrans = [
    {
        price: 89.03,
        amount: 0.15,
        total: 126,
    },
    {
        price: 94.02,
        amount: 0.18,
        total: 126
    },
    {
        price: 92.06,
        amount: 0.22,
        total: 252,
    },
    {
        price: 95.21,
        amount: 0.26,
        total: 176
    },
    {
        price: 95.31,
        amount: 0.31,
        total: 226
    },
    {
        price: 92.01,
        amount: 0.35,
        total: 248
    },
    {
        price: 97.34,
        amount: 0.53,
        total: 258
    }
]

export {SellOrdersRow, SellOrdersTrans};
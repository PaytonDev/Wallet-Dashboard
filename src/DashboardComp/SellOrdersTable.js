import React from 'react';
import { Table } from 'reactstrap';
import {SellOrdersRow, SellOrdersTrans} from "./SellOrdersRow";

const SellOrdersTable = () => {
    return (
        <Table borderless className="SellOrders-table">
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {SellOrdersTrans.map((sell, idx) =>
                    <SellOrdersRow
                        price={sell.price}
                        amount={sell.amount}
                        total={sell.total}
                        key={idx}
                    />
                )}
            </tbody>
        </Table>
    )
}

export { SellOrdersTable };
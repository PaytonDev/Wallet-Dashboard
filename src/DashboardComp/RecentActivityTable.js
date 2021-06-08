import React from 'react';
import { Table } from 'reactstrap';
import {RecentActivityRow, RecentActivityData} from "./RecentActivityRow";

const RecentActivityTable = () => {
    return (
        <Table borderless>
            <tbody>
                {RecentActivityData.map((act, idx) =>
                    <RecentActivityRow
                        currency={act.currency}
                        timeOfTrans={act.timeOfTrans}
                        completed={act.completed}
                        amount={act.amount}
                        key={idx}
                    />
                )}
            </tbody>
        </Table>
    )
}

export { RecentActivityTable };
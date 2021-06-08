import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DropdownBtn = ({dateFilter}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


        // TODO: Create dynamic function and figure out how to pass argument to on click function

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Weekly (2020)
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => dateFilter(daily)}>Daily</DropdownItem>
                <DropdownItem onClick={() => dateFilter(weekly)}>Weekly</DropdownItem>
                <DropdownItem onClick={() => dateFilter(monthly)}>Monthly</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
const daily = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Current Balance",
            data: [4500, 1500, 7500, 6654, 10000, 9587, 16700],
            fill: false,
            backgroundColor: "#000",
            borderColor: "#F6D056",
            lineTension: .3,
        },
    ],
}
const weekly = {
    labels: ["2nd - 8th", "9th - 15th", "16th - 22nd", "23rd - 29th"],
    datasets: [
        {
            label: "Current Balance",
            data: [15000, 18000, 17000, 19000],
            fill: false,
            backgroundColor: "#000",
            borderColor: "#F6D056",
            lineTension: .3,
        },
    ],
}
const monthly = {
    labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
    datasets: [
        {
            label: "Current Balance",
            data: [24000, 18000, 45000, 15000, 65000, 78000],
            fill: false,
            backgroundColor: "#000",
            borderColor: "#F6D056",
            lineTension: .3,
        },
    ],
}

export default DropdownBtn;
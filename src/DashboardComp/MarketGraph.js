import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import DropdownBtn from "./DropdownBtn";
import "./MarketGraph.css";


const MarketGraph = () => {
    const [dateRange, setDateRange] = useState(defaultGraph);
    
    const dateFilter = (dates) => {
        setDateRange(dates)
    }




    return (
        <div className="MarketGraph">
            <header className="MarketGraph-header">
                <div>
                    <p>Market Overview</p>
                    <small className="MarketGraph-caption">Balance Updates</small>
                </div>
            <DropdownBtn className="MarketGraph-filter" dateFilter={dateFilter} />
            </header>
            <Line data={dateRange} options={options}/>
        </div>

    )
}

const defaultGraph = {
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

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    color: "rgb(255, 255, 255)"
                },
                gridLines: {
                    display:true,
                    color: "#ffffff",
                }
            },
        ],
        xAxes: [
            {
                gridLines: {
                    color: "rgb(255, 255, 255)",
                    backgroundColor:"#ffffff",
                }
            }
        ],
    },
}








export {MarketGraph};
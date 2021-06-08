import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Main.css";
import {Dashboard} from '../DashboardComp/Dashboard';
import MainBtns from './MainBts';

const Main = (props) => {
    
    return (
        <div className="Main mr-sm-auto">
            <header className= 'Main-header'>
                <label className="Main-label">
                    <input placeholder="Search" className="Main-input"/>
                </label>
                <MainBtns />
            </header>
            <Dashboard />
        </div>
    )


}

export default Main;
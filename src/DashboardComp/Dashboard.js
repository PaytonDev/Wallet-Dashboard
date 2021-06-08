import React from "react";
import Currencies from "./Currencies";
import {MarketGraph} from "./MarketGraph";
import RecentActivity from "./RecentActivity";
import SellOrders from "./SellOrders";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Container, Row, Col} from "reactstrap";
import {FilterLeft} from "react-bootstrap-icons"
import "./Dashboard.css";


const Dashboard = () => {
    
    return (
    <Container fluid>
        <div className="Dashboard">
            <div className= "Dashboard-header">
                <p>Dashboard</p>
                <Dropdown className="Dashboard-filter" variant="dark">
                    <DropdownToggle >
                        Filters
                        <FilterLeft className= "Dashboard-filter-icon"/>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem >Daily</DropdownItem>
                    <DropdownItem>Monthly</DropdownItem>
                    <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Row>
                <Currencies />
            </Row>
            <Row>
                <Col xs="8" className="Market-col">
                    <MarketGraph/>
                    <RecentActivity />
                </Col>
                <Col xs="4" className="SellOrders-col">
                    <SellOrders />
                </Col>
            </Row>
        </div>
    </Container>
    )
  
}






export {Dashboard};
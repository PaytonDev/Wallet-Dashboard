import React from 'react';
import { Nav } from 'reactstrap';
import {Profile, profileInfo} from './Profile';
import {SidebarLinks, links} from './SidebarLinks'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div className="Sidebar text-center">
            <Nav className="flex-column">
                <h3 className="Sidebar-header">Wallet</h3>
                <Profile name={profileInfo.name} profileImg={profileInfo.profileImg} jobTitle={profileInfo.jobTitle}/>
                <SidebarLinks links={links} />
            </Nav>
        </div>
    )
}

export default Sidebar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarLink.css'

const SidebarLink = ({icon, title, id}) => {

    return (

        <li className="SidebarLink" id={`${id}`}>
            <span className="SidebarLink-icon">{icon}</span>
            {title}
        </li>
    )
}

export default SidebarLink;
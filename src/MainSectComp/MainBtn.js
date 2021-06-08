import React from 'react';
import './MainBtn.css'
import {Bell, ChatLeftText, Gift, Gear} from 'react-bootstrap-icons';

const MainBtn = ({icon, link, title}) => {
    return (
       <>
            <button className="MainBtn">
            <a href={link} alt={title}>
                {icon}
            </a>
            </button>
        </>
    )
}


const links = [
    {
        title: "settings",
        icon: <Gear />,
        link: "#"
    },
    {
        title: "gifts",
        icon: <Gift />,
        link: "#"
    },
    {
        title: "messages",
        icon: <ChatLeftText />,
        link: "#"
    },
    {
        title: "notifications",
        icon: <Bell />,
        link: "#"
    },
]

export {links, MainBtn};
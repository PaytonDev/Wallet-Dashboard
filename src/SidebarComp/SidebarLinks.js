import React from 'react';
import SidebarLink from './SidebarLink';
import {Speedometer2, Wallet2, CashStack, Coin, CurrencyExchange, Gear} from 'react-bootstrap-icons';
import './SidebarLinks.css'


const SidebarLinks = ({links}) => {
    return (
        <ul className="SidebarLinks">
            {links.map((link, idx) => (
                    <SidebarLink  title={link.title} icon={link.icon} key={`${link.title}${idx}`}/>
            ))}
        </ul>
    )
}

const links = [
    {
        id: "dashboard",
        title:"Dashboard",
        icon:<Speedometer2 />
    },
    {   
        id: "my-wallet",
        title:"My Wallet",
        icon:<Wallet2 />
    },
    {   
        id: "transaction",
        title:"Transaction",
        icon:<CashStack />
    },
    {   
        id: "crypto",
        title:"Crypto",
        icon:<Coin />
    },
    {   
        id: "exchange",
        title:"Exchange",
        icon:<CurrencyExchange />
    },
    {   
        id: "settings",
        title:"Settings",
        icon:<Gear />
    },
]


export {links, SidebarLinks};

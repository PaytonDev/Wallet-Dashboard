import React from "react";
import {MainBtn, links} from "./MainBtn"
import "./MainBts.css"

const MainBtns = () => {
    return (
        <div className="MainBts">
            {links.map(
                (link, idx) => <MainBtn title={link.title} icon={link.icon} link={link.link} key={`${link.title}${idx} key`}/>
            )}
        </div>
    )
}

export default MainBtns;
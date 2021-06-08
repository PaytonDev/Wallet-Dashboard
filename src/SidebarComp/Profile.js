import React from 'react';
import "./Profile.css";
import logo from "./Batman.png"

const Profile = ({name, jobTitle}) => {
    return (
    <div className="Profile">
        <img src={logo} alt="" className="Profile-img"/>
        <p>{name}</p>
        <small>{jobTitle}</small><br />
        <small>Sidebar links are inactive.</small><br />
        <small>Future Updates will be adding more pages.</small>
    </div>
    )
}

const profileInfo = {
    name: "Batman",
    jobTitle: "React Engineer / Crime Fighter",
}


export {profileInfo, Profile};
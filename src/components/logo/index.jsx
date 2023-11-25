import React from "react";
import "./style.css";
import logo from"./img/dogFood_icon.svg";

export default () => {
    return <a className="logo_icon" href="">
        <img src={logo} alt="bones" height="50px" width="50px"/>
        <h2 className="bones_dogFood">GogFood</h2>
        </a>
}
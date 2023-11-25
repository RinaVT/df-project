import React from "react";
import "./style.css";
import Logo from "../logo";
import {ReactComponent as FavIcon} from "./img/like_heart.svg";
import {ReactComponent as CartIcon} from "./img/bag_buy.svg";
import {ReactComponent as ProIcon} from "./img/dogFood.svg";

export default () => {
    return <header>
        <div className="logo">
            <Logo/>
        </div>
        <input type="search"/>
        <nav>
            <a href=""><FavIcon/></a>
            <a href=""><CartIcon/></a>
            <a href=""><ProIcon/></a>
        </nav>
    </header>
}

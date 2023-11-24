import React from "react";
import "./style.css";

export default () => {
    return <header>
        <div className="logo">
            <div className="logoIconGog"/>
            <h3 className="logoDog">DogFood</h3>
        </div>
        <input type="search"/>
        <nav>
            <a href="">Favorites</a>
            <a href="">Cart</a>
            <a href="">Profile</a>
        </nav>
    </header>
}
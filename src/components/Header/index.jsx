import React, {useState} from "react";
import Logo from "../logo";
import "./style.css";
import {ReactComponent as FavIcon} from "./img/like_heart.svg";
import {ReactComponent as CartIcon} from "./img/bag_buy.svg";
import {ReactComponent as ProIcon} from "./img/dogFood_icon.svg";


export default ({products, update}) => {
    const [text, changeText] = useState();
    const [cnt, setCnt] = useState(0);
    const handler = e => {
        changeText(e.target.value);
        const result = products.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setCnt(result.length);
        if (!text) {
            update(products);
        } else {
            update(result);
        }
    }
    return <>
        <header>
            <div className="logo">
                <Logo/>
            </div>
            <input type="search" value={text} onChange={handler}/>
            <nav>
                <a href=""><FavIcon/></a>
                <a href=""><CartIcon/></a>
                <a href=""><ProIcon/></a>
            </nav>
        </header>
        <div>
            {text ? `По запросу ${text} найдено ${cnt} позиций` : "Поиск..."}
        </div>
    </>
}

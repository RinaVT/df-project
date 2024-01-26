import React from "react";
import Logo from "../logo";
import "./style.css";
import {ReactComponent as TelIcon} from "./icon/telegram.svg";
import {ReactComponent as WatsIcon} from "./icon/watsup.svg";
import {ReactComponent as InstIcon} from "./icon/instagram.svg";
import {ReactComponent as VkIcon} from "./icon/vk.svg";

const Footer = () => {
    return (
        <footer>
            <div className="logoFooter">
                <div className="logo">
                    <Logo/>
                </div>
                <p className="pLogo">Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </div>
            <div className="navigator">
                <a href="">Каталог</a>
                <a href="">Акции</a>
                <a href="">Новости</a>
                <a href="">Отзывы</a>
            </div>
            <div className="navigator">
                <a href="">Оплата и доставка</a>
                <a href="">Часто спрашивают</a>
                <a href="">Обратная связь</a>
                <a href="">Контакты</a>
            </div>
            <nav className="contacts">
                <h3>Мы на связи</h3>
                <div className="mailTel">
                    <a className="tel" href="tel:+79990000000">8 (999) 000 - 00 - 00</a>
                    <a className="mail" href="mailto:dogfood_ru@gmail.com">dogfood_ru@gmail.com</a>
                </div>
                <div className="contactsIcon">
                    <a href=""><TelIcon/></a>
                    <a href=""><WatsIcon/></a>
                    <a href=""><InstIcon/></a>
                    <a href=""><VkIcon/></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer; 
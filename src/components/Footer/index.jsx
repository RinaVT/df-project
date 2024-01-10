import React from "react";
import Logo from "../logo";
import "./style.css";

const Footer = () => {
    return (
        <div>
            <div className="logoFooter">
                <div className="logo">
                    <Logo/>
                </div>
                <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </div>
            <nav className="navigator">
                <div>
                    <a href="">Каталог</a>
                    <a href="">Акции</a>
                    <a href="">Новости</a>
                    <a href="">Отзывы</a>
                </div>
                <div>
                    <a href="">Оплата и доставка</a>
                    <a href="">Часто спрашивают</a>
                    <a href="">Обратная связь</a>
                    <a href="">Контакты</a>
                </div>
            </nav>
            
        </div>
    )
}

export default Footer; 
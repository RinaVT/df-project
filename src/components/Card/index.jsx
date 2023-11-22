import React from "react";

const Card = () => {
    return (
        <div className="card">
            <div className="card_img"></div>
            <div className="card_price">300 ₽</div>
            <div className="card_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            <button className="btn">В корзину</button>
        </div>
    )
}

export default Card; 
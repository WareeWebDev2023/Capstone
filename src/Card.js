import React from "react";

function Card({ img, title, description, price }) {
    return (<div class="grid-item card">
        <img class="card-img" src={img}></img>
        <div className="card-header">
            <h4>{title}</h4>
            <span>${price}</span>
        </div>
        <div className="card-body">
            <p>{description}</p>
        </div>
        <div className="card-footer">
            <span>Order a delivery</span>
            <img src="images/scooter.png"></img>
        </div>
    </div >);
}

export default Card;
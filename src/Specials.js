import React from "react";
import Card from "./Card.js";

function Specials() {
    return <div id="specials">
        <div class="specials-header">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
        </div>
        <div class="card-container">

            <Card
                img="images/GreekSalad.png"
                title="Greek Salad"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                price="12.95"></Card>

            <Card
                img="images/Bruchetta.png"
                price="15.00"
                title="Bruchetta"
                description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil ">

            </Card>

            <Card
                img="images/lemondessert.png"
                price="13.44"
                title="Lemon Dessert"
                description="Tis comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"></Card>
        </div>
    </div >
}


export default Specials;
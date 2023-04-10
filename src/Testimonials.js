import React from "react";

function Rating({ img, rating, comment }) {
    let numRating = parseInt(rating);
    return (<div className="column">
        <div className="ratings">
            <span className={"fa fa-star " + (numRating >= 1 ? "checked" : "")}></span>
            <span className={"fa fa-star " + (numRating >= 2 ? "checked" : "")}></span>
            <span className={"fa fa-star " + (numRating >= 3 ? "checked" : "")}></span>
            <span className={"fa fa-star " + (numRating >= 4 ? "checked" : "")}></span>
            <span className={"fa fa-star " + (numRating >= 5 ? "checked" : "")}></span>
        </div>
        <img src={img} />
        <h3>{comment}</h3>
    </div >);
}

function Testimonials() {
    return <div id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
            <Rating
                img="images/ManLaugh.png"
                comment="Great food! Great Service!"
                rating="5" />
            <Rating
                img="images/OleWomen.png"
                comment="Delicious Pasta!"
                rating="4" />
            <Rating
                img="images/WomenSkinHead.png"
                comment="The Bruchetta is scrumptious"
                rating="5" />
        </div>
    </div>
}

export default Testimonials;
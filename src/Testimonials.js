import React from "react";

function Testimonials() {
    return <div id="testimonials">

        <h1>Testimonials</h1>
        <div class="container">
            <div class="column">
                <h2> Rating</h2>
                <div class="ratings">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <img src="images/ManLaugh.png" />
                <p>Great food! Great service!</p>
            </div>
            <div class="column">
                <h2> second column </h2>
                <p> This is second column of our grid system</p>
            </div>
            <div class="column">
                <h2> Third column </h2>
                <p> This is third column of our grid system</p>
            </div>
        </div>

    </div>
}

export default Testimonials;
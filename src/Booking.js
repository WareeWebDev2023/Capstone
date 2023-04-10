import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago from "./Chicago";

function Booking({ setPage }) {
    return <div className="booking-container">
        <header>
            <h3>Reserve your experience</h3>
        </header>
        <div>
            <label>Pick a Date</label>
            <input type="date"></input>
        </div>
        <label>Pick a time</label>
        <input type="time"></input>
        <label>Number of Guests</label>
        <input type="number"></input>
        <button
            onClick={() => setPage("Homepage")}>Reserve</button>
    </div>
}


export default Booking;
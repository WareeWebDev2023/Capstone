import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago from "./Chicago";

function Homepage({ setPage, currentPage }) {
    return <>
        <Hero
            setPage={setPage}></Hero>
        <Specials></Specials>
        <Testimonials></Testimonials>
        <Chicago></Chicago>
    </>
}


export default Homepage;
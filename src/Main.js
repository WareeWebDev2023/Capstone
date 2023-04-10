import Homepage from './Homepage';
import Section from './Section';
import Booking from './Booking';
import React from 'react';

function Main({ currentPage, setPage }) {
    if (currentPage == "Booking") {
        return (<Booking
            setPage={setPage}></Booking>);
    }
    else {
        return (<Homepage
            currentPage={currentPage}
            setPage={setPage} ></Homepage>);
    }
}

export default Main;
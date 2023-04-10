function Hero({ setPage }) {
    return (

        <header>
            <div id="text-area">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Authentic Italian food in town<br></br>Best taste like homemade cooking<br></br>from your Grandma Kitchen.</p>
                <button
                    onClick={() => setPage("Booking")}>Reserve a Table</button>
            </div>
            <img src="images/restauranfood.png" />


        </header>


    );
}

export default Hero;

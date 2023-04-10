import './App.css';
import Nav from './Nav.js';
import Main from './Main';
import Footer from './Footer';
import React from 'react';


function App() {
  const [currentPage, setPage] = React.useState("Homepage");
  return (
    <>
      <Nav>

      </Nav>
      <Main setPage={setPage} currentPage={currentPage}>


      </Main>
      <Footer>

      </Footer>
    </>
  );
}

export default App;

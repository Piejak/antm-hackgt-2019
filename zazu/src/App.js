import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titlebar from './Navbar/navbar';
import Container from 'react-bootstrap/Container';
import PortfolioForm from './PortfolioForm';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Titlebar />
      <br>
        </br>
      <Container>
        <h1>
          Manage Your Money
        </h1>
        <br>
          </br>
        <PortfolioForm />
        <br>
          </br>
        <Footer />
      </Container>
    </div>
    
  );
}

export default App;

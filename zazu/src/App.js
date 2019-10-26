  import React from 'react';
  import logo from './logo.svg';
import './App.css';
import Titlebar from './Navbar/navbar';
import Container from 'react-bootstrap/Container';
import PortfolioForm from './PortfolioForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Titlebar />
      <Container>
        <h1>
          Manage Your Money
        </h1>
        <PortfolioForm />
      </Container>
    </div>
  );
}

export default App;

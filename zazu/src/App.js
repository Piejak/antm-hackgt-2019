import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Titlebar from './Navbar/navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PortfolioForm from './PortfolioForm';
import PortfolioPerformance from './PortfolioPerformance';
import Footer from './Footer';

import {
  FaArrowLeft
} from 'react-icons/fa';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  // TODO: make API calls to get data from backend
  // TODO: once we have tickers and their weights, make the API calls to Blackrock

  constructor(props) {
    super(props);
    this.state = {
      step: 'form'
    }
    this.handleClick = this.handleClick.bind(this);
    this.backButton = this.backButton.bind(this);
  }

  handleClick() {
    this.setState({step: 'performance'});
  }

  backButton() {
    this.setState({step: 'form'});
  }

  render() {
    return (
      <div className="App">
        <Titlebar />
        <Container>
          {
            this.state.step === 'performance' ?
              <div className='App'>
                <Button variant="outline-primary" onClick={this.backButton}><FaArrowLeft />Back</Button>
                <br />
                <h1>
                  We've picked the following investments for you
                </h1>
                <PortfolioPerformance />
              </div>
              :
              <div>
                <Row>
                  <Col med={6}>
                    <h1>
                      Manage your money
                    </h1>
                    <PortfolioForm formSubmit={this.handleClick} />
                  </Col>

                  <Col med={6}>
                    <h1>Why invest?</h1>
                    <p>A 2017 Gallup poll found that <strong>46%</strong> of American's don't own stocks. By making smart investment choices you can grow your savings and start planning for the future. Most savings accounts offer between 1-2% annual returns, while the S&P500 has returned around 8% on average over the last 40 years.</p>
                    <p></p>
                  </Col>
                </Row>
                <br />
                <Footer />
              </div>
          }
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;

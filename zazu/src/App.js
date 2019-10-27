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
import ReactLoading from 'react-loading';

import {
  FaArrowLeft
} from 'react-icons/fa';


import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import constants from './constants';

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

  handleClick(data) {
    // send the preferences to the API
    this.setState({step: 'loading'});
    Axios.get(`${constants.serverBase}${constants.optimizeEndpoint}?time=${data.get('saveLengthRadios')}&risk=${data.get('saveRiskRadios')}`)
      .then((response) => {
        let optimizedPort = response.data[0];
        console.log(optimizedPort);
        let badTickers = [];
        const lowThresh = 0.01
        Object.keys(optimizedPort).forEach(k => {
          if (optimizedPort[k] < lowThresh) {
            badTickers.push(k)
          }
        });
        badTickers.forEach(t => {
          delete optimizedPort[t];
        })
        let tickers = Object.keys(optimizedPort);

        let alloc = [];
        tickers.forEach(t => {
          alloc.push(optimizedPort[t]);
        });
        let holdings = [];
        for(let i = 0; i < tickers.length; i++) {
          holdings.push({
            description: tickers[i],
            weight: alloc[i]
          });
        }
        this.setState({
          step: 'performance',
          holdings: holdings
        });
      }).catch((error) => {
        console.log(error);
        this.setState({step: 'form'});
      });

  }

  backButton() {
    this.setState({step: 'form'});
  }

  render() {
    switch (this.state.step) {
      case 'performance':
        return (
          <div className="App">
            <Titlebar />
            <Container>
                  <div className='App'>
                    <Button variant="outline-primary" onClick={this.backButton}><FaArrowLeft />Back</Button>
                    <br />
                    <h1>
                      We've picked the following investments for you
                    </h1>
                    <PortfolioPerformance holdings={this.state.holdings} />
                  </div>
              <Footer />
            </Container>
          </div>
        );
        break;
      case 'form':
        return (
          <div className="App">
            <Titlebar />
            <Container>
                  <div>
                    <Row>
                      <Col med={6} sm={12}>
                        <h1>
                          Manage your money
                        </h1>
                        <PortfolioForm formSubmit={this.handleClick} />
                      </Col>
                      <br />
                      <Col med={6} sm={12}>
                        <h1>Why invest?</h1>
                        <p>A 2017 Gallup poll found that <strong>46%</strong> of Americans don't own stocks. By making smart investment choices you can grow your savings and start planning for the future. Most savings accounts offer between 1-2% annual returns, while the S&P500 has returned around 8% on average over the last 40 years.</p>
                        <p></p>
                      </Col>
                    </Row>
                    <br />
                  </div>
              <Footer />
            </Container>
          </div>
        );
        break;
      case 'loading':
        return (
          <div className="App">
            <Titlebar />
            {/* <Container> */}
                  <div className='App'>
                    <div className='loadingDiv'>
                      <br />
                      <br />
                      <br />
                      <br />
                      {/* <Row> */}
                        {/* <Col med='5' />
                        <Col med='2'> */}
                          <ReactLoading type='spin' color='#0984e3'/>
                          <br />
                          <p style={{width: 230, marginLeft: -80}}>Finding investments right for you</p>
                        {/* </Col>
                        <Col med='5' /> */}
                      {/* </Row> */}
                    </div>
                  </div>
            {/* </Container> */}
          </div>
        );
        break;
      default:
        return (
          <div className="App">
            <Titlebar />
            <Container>
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
                        <p>A 2017 Gallup poll found that <strong>46%</strong> of Americans don't own stocks. By making smart investment choices you can grow your savings and start planning for the future. Most savings accounts offer between 1-2% annual returns, while the S&P500 has returned around 8% on average over the last 40 years.</p>
                        <p></p>
                      </Col>
                    </Row>
                    <br />
                  </div>
              <Footer />
            </Container>
          </div>
        );
        break;

    }
    // return (
    //   <div className="App">
    //     <Titlebar />
    //     <Container>
    //       {
    //         switch(this.state.step) {

    //         }
    //       }
    //       {
    //         this.state.step === 'performance' ?
    //           <div className='App'>
    //             <Button variant="outline-primary" onClick={this.backButton}><FaArrowLeft />Back</Button>
    //             <br />
    //             <h1>
    //               We've picked the following investments for you
    //             </h1>
    //             <PortfolioPerformance holdings={this.state.holdings} />
    //           </div>
    //           :
    //           <div>
    //             <Row>
    //               <Col med={6}>
    //                 <h1>
    //                   Manage your money
    //                 </h1>
    //                 <PortfolioForm formSubmit={this.handleClick} />
    //               </Col>

    //               <Col med={6}>
    //                 <h1>Why invest?</h1>
    //                 <p>A 2017 Gallup poll found that <strong>46%</strong> of Americans don't own stocks. By making smart investment choices you can grow your savings and start planning for the future. Most savings accounts offer between 1-2% annual returns, while the S&P500 has returned around 8% on average over the last 40 years.</p>
    //                 <p></p>
    //               </Col>
    //             </Row>
    //             <br />
    //           </div>
    //       }
    //       <Footer />
    //     </Container>
    //   </div>
    // );
  }
}

export default App;

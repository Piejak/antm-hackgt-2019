import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Titlebar from './Navbar/navbar';
import Container from 'react-bootstrap/Container';
import PortfolioForm from './PortfolioForm';
import PortfolioPerformance from './PortfolioPerformance';
import Footer from './Footer';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 'form'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({step: 'performance'});
  }

  render() {
    return (
      <div className="App">
        <Titlebar />
        <Container>
          {
            this.state.step === 'performance' ?
              <div>
                <h1>
                  We've picked the following investments for you
                </h1>
                <PortfolioPerformance />
              </div>
              :
              <div>
                <h1>
                  Manage your money
                </h1>
                <PortfolioForm formSubmit={this.handleClick} />
                <br>
          </br>
              </div>
          }
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;

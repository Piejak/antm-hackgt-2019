import React from 'react';
// import logo from './logo.svg';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import APIClient from './apiClient';
import HoldingsChart from './Charts/HoldingsChart';
import PerformanceChart from './Charts/PerformanceChart';


import 'bootstrap/dist/css/bootstrap.min.css';

class PortfolioPerformance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capitalValue: 10000
        }
        this.startingCapChange = this.startingCapChange.bind(this);
    }

    async componentDidMount() {
        this.apiClient = new APIClient();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('saveLengthRadios'));
    }

    startingCapChange(event) {
        console.log(event.target.value);
        try {
            let n = Number(event.target.value);
            this.setState({capitalValue: n});
        } catch (error) {

        }
    }

    render() {
        let h = [
            {
                weight: 30,
                description: 'iShares Core US Aggregate Bond ETF',
                assetClass: 'FixedIncome'
            },
            {
                weight: 20,
                description: 'BlackRock Global Allocation Fund',
                assetClass: 'Allocation'
            },
            {
                weight: 50,
                description: 'Vanguard FTSE Emerging Markets ETF',
                assetClass: 'Equity'
            }
        ];
        return (
            <div>
                <HoldingsChart holdings={h} />
                <br />
                <h3>Here's how your portfolio has been doing</h3>
                    <Row>
                        <Col xs={8}>See how different investment amounts would grow over time</Col>
                    </Row>
                    <FormGroup as={Row}>
                        <FormLabel column sm="3">
                            Starting investment
                        </FormLabel>
                        <Col sm="4">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                placeholder="10000"
                                onChange={this.startingCapChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="6" />
                    </FormGroup>
                    <FormGroup as={Row}>
                        <FormLabel column sm="3">
                            Start Date
                        </FormLabel>
                        <Col sm="4">
                            <FormControl
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type="date"
                            />
                        </Col>
                        <Col sm="6" />
                    </FormGroup>
                <PerformanceChart capitalValue={this.state.capitalValue}/>
            </div>
        );
    }
}

export default PortfolioPerformance;

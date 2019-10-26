import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import ETFHover from "./ETFHover"
import BondHover from "./BondHover"
import RiskHover from "./RiskTolerance"
import StockHover from "./StockHover"


import {FaArrowRight} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formSubmit: props.formSubmit};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.apiClient = new APIClient();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.state.formSubmit();
        console.log(data.get('saveLengthRadios'));
    }

    render() {
        return (
            < Form onSubmit = {this.handleSubmit} >
                <Form.Group controlId="saveLength">
                    <Form.Label>How long do you want to save?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Short Term (0-5 years)"
                    name="saveLengthRadios"
                    id = "saveLengthRadiosShort"
                    value="short"
                    defaultChecked
                    />
                    <Form.Check
                    type="radio"
                    label = "Medium Term (5-15 years)"
                    name = "saveLengthRadios"
                    id = "saveLengthRadiosMedium"
                    value = "medium"
                    />
                    <Form.Check
                    type="radio"
                    label = "Long Term (15+ years)"
                    name = "saveLengthRadios"
                    id = "saveLengthRadiosLong"
                    value = "long"
                    />
                </Form.Group>
                <br />
                <Form.Group controlId="saveRisk" required>
                    <Form.Label><div>
                        What's your <RiskHover/>?
                        </div>
                        </Form.Label>
                    {/* Think about giving year over year return ranges for these rather than talk about the financial
                    instruments being used */}
                    <Form.Check
                    type="radio"
                    label= {<div> Low (<ETFHover/> & <BondHover/>)</div>}
                    name="saveRiskRadios"
                    id = "saveRiskRadiosLow"
                    value = "low"
                    defaultChecked
                    />
                    <Form.Check
                    type="radio"
                    label = {<div> Medium (ETFs & <StockHover/>)</div>}
                    name = "saveRiskRadios"
                    id = "saveRiskRadiosMedium"
                    value = "medium"
                    />
                    <Form.Check
                    type="radio"
                    label = "High (Stocks)"
                    name = "saveRiskRadios"
                    id = "saveRiskRadiosHigh"
                    value = "high"
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Get a customized investment portfolio <FaArrowRight />
                </Button>
                {/* <br />
                <br />
                <ProgressBar now={0} /> */}
                </Form>
        );
    }
}

export default PortfolioForm;

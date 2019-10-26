import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import ProgressBar from 'react-bootstrap/ProgressBar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Overlay from 'react-bootstrap/Overlay'
import ETFHover from "./ETFHover"
import BondHover from "./BondHover"

import 'bootstrap/dist/css/bootstrap.min.css';

class PortfolioForm extends React.Component {

    async componentDidMount() {
        this.apiClient = new APIClient();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('saveLength'));
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
                    />
                    <Form.Check
                    type="radio"
                    label = "Medium Term (5-15 years)"
                    name = "saveLengthRadios"
                    id = "saveLengthRadiosMedium"
                    />
                    <Form.Check
                    type="radio"
                    label = "Long Term (15+ years)"
                    name = "saveLengthRadios"
                    id = "saveLengthRadiosLong"
                    />
                </Form.Group>
                <br />
                <Form.Group controlId="saveRisk">
                    <Form.Label>What's your risk tolerance?</Form.Label>
                    {/* Think about giving year over year return ranges for these rather than talk about the financial
                    instruments being used */}
                    <Form.Check
                    type="radio"
                    label= {<div> Low (<ETFHover/> & <BondHover/>)</div>}
                    name="saveRiskRadios"
                    id = "saveRiskRadiosLow"
                    />
                    <Form.Check
                    type="radio"
                    label = "Medium (ETFs & Stocks)"
                    name = "saveRiskRadios"
                    id = "saveRiskRadiosMedium"
                    />
                    <Form.Check
                    type="radio"
                    label = "High (Stocks)"
                    name = "saveRiskRadios"
                    id = "saveRiskRadiosHigh"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {/* <br />
                <br />
                <ProgressBar now={0} /> */}
                </Form>
        );
    }
}

export default PortfolioForm;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import HoldingsChart from './Charts/HoldingsChart';


import 'bootstrap/dist/css/bootstrap.min.css';

class PortfolioPerformance extends React.Component {

    async componentDidMount() {
        this.apiClient = new APIClient();
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('saveLengthRadios'));
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
            <HoldingsChart holdings={h} />
        );
    }
}

export default PortfolioPerformance;

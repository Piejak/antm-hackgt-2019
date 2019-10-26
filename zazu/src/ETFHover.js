import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import FinTerms from './Terminology'
import {EndText} from './Terminology'
import Popover from 'react-bootstrap/Popover'

const ETFStr=`Short for Exchange-Traded Fund. ETFs are made up of many different stocks, allowing you to get access to entire industries with only one trade.`;

const ETFs = (
    <Popover id="popover-basic">
    <Popover.Content>
    {ETFStr}
    </Popover.Content>
  </Popover>
);


class ETFHover  extends React.Component {
    render(){
        return(
        <OverlayTrigger
        trigger='hover' placement="auto"
        overlay={ETFs}>
            <a href="#">ETFs</a>
            </OverlayTrigger>
        )
    }
}
export default ETFHover


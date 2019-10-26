import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import FinTerms from './Terminology'
import {EndText} from './Terminology'
import Popover from 'react-bootstrap/Popover'


const StockStr=`Stocks are a piece of ownership in a company. The more stocks you own, the larger ownership you have in the corresponding company.`

const Stocks = (
    <Popover id="popover-basic">
    <Popover.Content>
       
    {StockStr}
       
    </Popover.Content>
  </Popover>
)


class StockHover  extends React.Component {
    render(){
        return(
        <OverlayTrigger
        trigger='hover' placement="auto"
        overlay={Stocks}>
            <a href="#">Stocks</a>
            </OverlayTrigger>
        )
    }
}
export default StockHover

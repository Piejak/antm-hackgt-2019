import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import FinTerms from './Terminology'
import {EndText} from './Terminology'
import Popover from 'react-bootstrap/Popover'


const PortfolioStr=`A portfolio the name for a group of investments. A portfolio can consist of: stocks, bonds, ETFs, mutual funds, and many other assets.`

const portfolio = (
    <Popover id="popover-basic">
    <Popover.Content>
       
    {PortfolioStr}
       
    </Popover.Content>
  </Popover>
)


class PortfolioHover  extends React.Component {
    render(){
        return(
        <OverlayTrigger
        trigger='hover' placement="auto"
        overlay={portfolio}>
            <a href="#">portfolio</a>
            </OverlayTrigger>
        )
    }
}
export default PortfolioHover

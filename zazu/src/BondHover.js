import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import FinTerms from './Terminology'
import {EndText} from './Terminology'
import Popover from 'react-bootstrap/Popover'


const BondStr=`A bonds is you loaning your money to the government for a fixed period of time. After that set time, the government pays you back the price of the bond plus the interest it gained. Bonds are usually considered a safer investment than stocks, as they're backed by the U.S government.`

const Bonds = (
    <Popover id="popover-basic">
    <Popover.Content>
       
    {BondStr}
       
    </Popover.Content>
  </Popover>
)


class BondHover  extends React.Component {
    render(){
        return(
        <OverlayTrigger
        trigger='hover' placement="auto"
        overlay={Bonds}>
            <a href="#">Bonds</a>
            </OverlayTrigger>
        )
    }
}
export default BondHover

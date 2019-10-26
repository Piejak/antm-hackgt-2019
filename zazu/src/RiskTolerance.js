import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import APIClient from './apiClient';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import FinTerms from './Terminology'
import {EndText} from './Terminology'
import Popover from 'react-bootstrap/Popover'


const RiskTolerance=`Risk tolerance is your ability to take on risk. Usually higher risk tolerances results in higher long term gain, but risk losing money in the short term.`

const Risk= (
    <Popover id="popover-basic">
    <Popover.Content>
       
    {RiskTolerance}
       
    </Popover.Content>
  </Popover>
)


class RiskHover  extends React.Component {
    render(){
        return(
        <OverlayTrigger
        trigger='hover' placement="auto"
        overlay={Risk}>
            <a href="#">risk tolerance</a>
            </OverlayTrigger>
        )
    }
}
export default RiskHover

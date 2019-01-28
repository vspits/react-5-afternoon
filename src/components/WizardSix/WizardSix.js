import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateCost, updateDownPayment} from '../../ducks/reducer'

class WizardSix extends Component {

    render(){
        const {updateCost, updateDownPayment} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(event) => updateCost(event.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(event) => updateDownPayment(event.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return{
        cost: reduxState.cost
    }
}

const mapDispatchToProps = {
    updateCost: updateCost,
    updateDownPayment: updateDownPayment
}

const connectStatement = connect(mapStateToProps, mapDispatchToProps)(WizardSix)
export default connectStatement;
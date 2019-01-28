import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateRealEstateAgent} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        const {updateRealEstateAgent} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={(event) => updateRealEstateAgent('True')}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={(event) => updateRealEstateAgent('False')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return{
        realEstateAgent: reduxState.realEstateAgent
    }
}

const mapDispatchToProps = {
    updateRealEstateAgent: updateRealEstateAgent
}

const connectStatement = connect(mapStateToProps, mapDispatchToProps)(WizardFive)
export default connectStatement;
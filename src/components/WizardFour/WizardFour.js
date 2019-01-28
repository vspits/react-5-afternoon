import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateFound} from '../../ducks/reducer'


class WizardFour extends Component {
    render(){
        const {updateFound} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={(event) => updateFound('True')}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={(event) => updateFound('False')}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        found: reduxState.found
    }
}

const mapDispatchToProps = {
    updateFound
}

const connectStatement = connect(mapStateToProps, mapDispatchToProps)(WizardFour)
export default connectStatement;
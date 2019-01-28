import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateFirstName, updateLastName, updateEmail} from '../../ducks/reducer'

class WizardTen extends Component {
    render(){
        const {updateFirstName, updateLastName, updateEmail} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(event) => updateFirstName(event.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(event) => updateLastName(event.target.value)}/>
                    <input type="text" placeholder="email" onChange={(event) => updateEmail(event.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return{
        firstName: reduxState.firstName,
        lastName: reduxState.lastName,
        email: reduxState.email
    }
}

const mapDispatchToProps = {
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateEmail: updateEmail
}

const connectStatement = connect(mapStateToProps, mapDispatchToProps)(WizardTen)
export default connectStatement
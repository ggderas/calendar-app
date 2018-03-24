import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';

class MainContainer extends Component {

    state = {
        inputs:{
            startDate: '',
            numberOfDays: 0,
            countryCode: ''
        }
    }   

    render() {
        return (
        <div className="App">
            <div>
                <label>Start Date</label>
                <input type="date" value={this.state.inputs.startDate} onChange={(e) => {
                    let inputs = this.state.inputs;
                    inputs.startDate = e.target.value;
                    this.setState({inputs:inputs})      
                }} />
            </div>

            <div>
                <label>Number of Days</label>
                <input type="number" value={this.state.inputs.numberOfDays} onChange={(e) => {
                    let inputs = this.state.inputs;
                    inputs.numberOfDays = parseInt(e.target.value);
                    this.setState({inputs:inputs})   
                }} />                
            </div> 

            <div>
                <label>Country Code</label>
                <input value={this.state.inputs.countryCode} onChange={(e) => {
                    let inputs = this.state.inputs;
                    inputs.countryCode = e.target.value;
                    this.setState({inputs:inputs});
                }} />
            </div>  

        </div>
        );
    }
}

export default MainContainer;

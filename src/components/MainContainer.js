import React, { Component } from 'react';
import '../App.css';
import Calendar from './Calendar';
import moment from 'moment';

class MainContainer extends Component {

    state = {
        inputs:{
            startDate: '',
            numberOfDays: 0,
            countryCode: ''
        },
        calendars: []
    }   

    handleAnyChange(){

        let 
            numberOfDays = this.state.inputs.numberOfDays,
            startDate = this.state.inputs.startDate,
            countryCode = this.state.inputs.countryCode,
            date = moment(startDate),
            year = moment(startDate).format("YYYY");

        if(numberOfDays <= 0)
            return;

        let 
            calendars = [],
            imTryingToFindHowManyCalendarsINeed = true,
            currentDate = date,
            currentMonth = date.month(),
            calendarDayCounter = 0,
            totalCounter = 0;

        while(imTryingToFindHowManyCalendarsINeed){
            let newDate  = moment(currentDate).add(calendarDayCounter, 'days');
            let newMonth = newDate.month();
            if(newMonth !== currentMonth || totalCounter === numberOfDays){

                calendars.push({
                    startDate: currentDate,
                    numberOfDaysToFill: calendarDayCounter
                })

                calendarDayCounter = 0;
                currentDate = newDate;
                currentMonth = newMonth ;
            }

            if(totalCounter === numberOfDays){
                imTryingToFindHowManyCalendarsINeed = false;
            }

            calendarDayCounter++;
            totalCounter++;             
        }

        this.setState({calendars: calendars});
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
                    this.handleAnyChange();
                }} />
            </div>

            <div>
                <label>Number of Days</label>
                <input type="number" value={this.state.inputs.numberOfDays} onChange={(e) => {
                    let inputs = this.state.inputs;
                    inputs.numberOfDays = parseInt(e.target.value);
                    this.setState({inputs:inputs})                    
                    this.handleAnyChange();
                }} />                
            </div> 

            <div>
                <label>Country Code</label>
                <input value={this.state.inputs.countryCode} onChange={(e) => {
                    let inputs = this.state.inputs;
                    inputs.countryCode = e.target.value;
                    this.setState({inputs:inputs});
                    this.handleAnyChange();
                }} />
            </div>         

            <div className="container">
            {
                this.state.calendars.map((item, index) => {
                    return (
                        <div className="col-sm-6">
                            <Calendar key={index} startDate={item.startDate} numberOfDaysToFill={item.numberOfDaysToFill}/>  
                            <br/>                             
                        </div>
                    )
                })                
            }
            </div>

        </div>
        );
    }
}

export default MainContainer;

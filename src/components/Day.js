import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';

class Day extends Component {

    isWeekend(){
        let day = this.props.exactDate.toDate().getDay();
        return  (day === 6) || (day === 0);    // 6 = Saturday, 0 = Sunday        
    }

    render() {
        this.isWeekend();
        let numberDay = moment(this.props.exactDate).format("D");
        let shouldBeDisplayed = this.props.isFromSameMonth;

        shouldBeDisplayed &= (this.props.exactDate >= this.props.startDate) && 
                        (this.props.exactDate <= moment(this.props.startDate).add(this.props.numberOfDays - 1, 'days'));

        return(
                !shouldBeDisplayed ? (
                    <li></li>
                ) : (
                    <li className={this.isWeekend() ? "weekend-day" : "week-day"}>{numberDay}</li>
                )              
        )
    }
}

export default Day;

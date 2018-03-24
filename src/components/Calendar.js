import React, { Component } from 'react';
import '../App.css';
import Day from './Day';
import moment from 'moment';

class Calendar extends Component {
    render() {

        let
            startDate = this.props.startDate,
            currentDate = this.props.startDate,
            startDateCalendar = null,
            isProcessing = true;

        while (isProcessing) {
            let newCurrentDate = moment(currentDate).day("Sunday");
            if (moment(newCurrentDate).month() !== moment(startDate).month()) {
                startDateCalendar = newCurrentDate;
                isProcessing = false;
            }
            else if (moment(newCurrentDate).format("D") === (moment(currentDate).format("D"))) {
                newCurrentDate = moment(newCurrentDate).subtract(1, 'days');
            }

            currentDate = newCurrentDate;
        }

        startDateCalendar = currentDate;

        let days = [];
        for (let index = 0; index < 42; index++) {
            let exactDate = moment(startDateCalendar).add(index, 'days');
            days.push({
                exactDate: exactDate,
                isFromSameMonth: moment(exactDate).month() === moment(this.props.startDate).month()
            })

        }

        let
            monthName = moment(days[0].exactDate).add(1, 'months').format('MMMM'),
            year = moment(days[0].exactDate).add(1, 'months').format('YYYY');


        return (
            <div>
                <div className="calendar">
                    <div className="month">
                        <ul>
                            <li className="prev">&#10094;</li>
                            <li className="next">&#10095;</li>
                            <li>{monthName}<br /><span style={{ "fontSize": "18px" }}>{year}</span></li>
                        </ul>
                    </div>

                    <ul className="weekdays">
                        <li>S</li>
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                    </ul>


                    <ul className="days">
                        {
                            days.map((item, index) => {
                                return <Day numberOfDays={this.props.numberOfDaysToFill} startDate={this.props.startDate} index={index} exactDate={item.exactDate} isFromSameMonth={item.isFromSameMonth} />
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Calendar;

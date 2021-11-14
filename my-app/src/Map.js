import React, { Component } from 'react';

function intToTimeStr(timeInt) {
    // timeInt: num from [0, 1440) representing the minute of the day
    // there are 1440 mins in a day
    console.log(timeInt);
    let hour = Math.floor(timeInt / 60), minute = timeInt % 60;
    if (hour >= 20) {
        return "8:00 PM - the polls have closed!"
    }
    let AMPM = "AM";
    if (hour >= 12) {
        AMPM = "PM";
    }
    if (hour > 12) {
        hour -= 12;
    }
    let hourStr = hour.toString(), minuteStr = minute.toString();
    if (minute < 10) {
        minuteStr = "0" + minuteStr;
    }
    return hourStr + ":" + minuteStr + " " + AMPM;
}

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Clock">
              TIME: {intToTimeStr(this.props.time)}
            </div>
          );
    }
}
  
export default Map;

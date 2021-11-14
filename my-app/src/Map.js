function intToTimeStr(timeInt) {
    // timeInt: num from [0, 1440) representing the minute of the day
    // there are 1440 mins in a day
    let hour = timeInt / 60, minute = timeInt % 60;
    let AMPM = "AM";
    if (hour > 12) {
        hour -= 12;
        AMPM = "PM";
    }
    let hourStr = hour.toString(), minuteStr = minute.toString();
    if (minute < 10) {
        minuteStr = "0" + minuteStr;
    }
    return hourStr + ":" + minuteStr + " " + AMPM;
}

function Map() {
    let time = 9*60; // start at 9:00 AM
    return (
        <div className="mrap">
        
        </div>
    );
}
  
export default Map;

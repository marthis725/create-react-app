import './Schedule.css';
import React, { Component } from 'react';

function isBlocked(schedId, blockedTimes) {
    return blockedTimes.includes(schedId) ? 'blocked' : 'unblocked'
}

class Schedule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sched-box">
              <table>
                <tr>
                  <th>
                  Schedule
                  </th>
                </tr>
                <tr id="7" className={isBlocked("7", this.props.blockedTimes)}>
                  <th>
                  7:00 AM
                  </th>
                </tr>
                <tr id="8" className={isBlocked("8", this.props.blockedTimes)}>
                  <th>
                  8:00 AM
                  </th>
                </tr>
                <tr id="9" className={isBlocked("9", this.props.blockedTimes)}>
                  <th>
                  9:00 AM
                  </th>
                </tr>
                <tr id="10" className={isBlocked("10", this.props.blockedTimes)}>
                  <th>
                   10:00 AM
                  </th>
                </tr>
                <tr id="11" className={isBlocked("11", this.props.blockedTimes)}>
                  <th>
                   11:00 AM
                  </th>
                </tr>
                <tr id="12" className={isBlocked("12", this.props.blockedTimes)}>
                  <th>
                   12:00 PM
                  </th>
                </tr>
                <tr id="13" className={isBlocked("13", this.props.blockedTimes)}>
                  <th>
                  1:00 PM
                  </th>
                </tr>
                <tr id="14" className={isBlocked("14", this.props.blockedTimes)}>
                  <th>
                  2:00 PM
                  </th>
                </tr>
                <tr id="15" className={isBlocked("15", this.props.blockedTimes)}>
                  <th>
                  3:00 PM
                  </th>
                </tr>
                <tr id="16" className={isBlocked("16", this.props.blockedTimes)}>
                  <th>
                  4:00 PM
                  </th>
                </tr>
                <tr id="17" className={isBlocked("17", this.props.blockedTimes)}>
                  <th>
                  5:00 PM
                  </th>
                </tr>
                <tr id="18" className={isBlocked("18", this.props.blockedTimes)}>
                  <th>
                  6:00 PM
                  </th>
                </tr>
                <tr id="19" className={isBlocked("19", this.props.blockedTimes)}>
                  <th>
                  7:00 PM
                  </th>
                </tr>
                <tr id="20" className={isBlocked("20", this.props.blockedTimes)}>
                  <th>
                  8:00 PM
                  </th>
                </tr>
              </table>
            </div>
          );
    }
}
  
export default Schedule;

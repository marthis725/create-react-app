import './Schedule.css';
import React, { Component, useDebugValue } from 'react';

function activityType(schedId, blockedTimes) {
    for (const [activity, times] of Object.entries(blockedTimes)) {
        if (times.includes(schedId)) {
            return activity;
        }
    }
    return 'unblocked';
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
                <tr id="7" className={activityType("7", this.props.blockedTimes)}>
                  <th>
                  7:00 AM
                  </th>
                </tr>
                <tr id="8" className={activityType("8", this.props.blockedTimes)}>
                  <th>
                  8:00 AM
                  </th>
                </tr>
                <tr id="9" className={activityType("9", this.props.blockedTimes)}>
                  <th>
                  9:00 AM
                  </th>
                </tr>
                <tr id="10" className={activityType("10", this.props.blockedTimes)}>
                  <th>
                   10:00 AM
                  </th>
                </tr>
                <tr id="11" className={activityType("11", this.props.blockedTimes)}>
                  <th>
                   11:00 AM
                  </th>
                </tr>
                <tr id="12" className={activityType("12", this.props.blockedTimes)}>
                  <th>
                   12:00 PM
                  </th>
                </tr>
                <tr id="13" className={activityType("13", this.props.blockedTimes)}>
                  <th>
                  1:00 PM
                  </th>
                </tr>
                <tr id="14" className={activityType("14", this.props.blockedTimes)}>
                  <th>
                  2:00 PM
                  </th>
                </tr>
                <tr id="15" className={activityType("15", this.props.blockedTimes)}>
                  <th>
                  3:00 PM
                  </th>
                </tr>
                <tr id="16" className={activityType("16", this.props.blockedTimes)}>
                  <th>
                  4:00 PM
                  </th>
                </tr>
                <tr id="17" className={activityType("17", this.props.blockedTimes)}>
                  <th>
                  5:00 PM
                  </th>
                </tr>
                <tr id="18" className={activityType("18", this.props.blockedTimes)}>
                  <th>
                  6:00 PM
                  </th>
                </tr>
                <tr id="19" className={activityType("19", this.props.blockedTimes)}>
                  <th>
                  7:00 PM
                  </th>
                </tr>
                <tr id="20" className={activityType("20", this.props.blockedTimes)}>
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

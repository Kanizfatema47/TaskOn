

import React, { useEffect, useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);
const CalenderScheduler = ({events}) => {



  return (
    <div className="Calendar" style={{ minHeight: 580,marginTop:'50px' }}>
      <Calendar
        events={events.map(data => {
       

          return {
            title: data.EventName,
            start: new Date(
              data.convertedyear,
              data.convertedmonth,
              data.convertedday,
              data?.Starttime
            ),
            end: new Date(
              data.convertedyear,
              data.convertedmonth,
              data.convertedday,
              data?.Endtime
            ),
          };


          
        })}
        defaultView="week"
        localizer={localizer}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        style={{ minHeight: 580 }}
      />
    </div>
  );
};

export default CalenderScheduler;

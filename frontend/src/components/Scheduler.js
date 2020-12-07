import React, { useState } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Scheduler() {
  const [meeting, setMeeting] = useState({
    date: "",
    agenda: "",
    context: "",
    whoIsNeeded: "",
    meetingTitle: "",
    startTime: "",
    endTime: "",
    meetingType: "",
    decisionsToMake: "",
  });

  const changeHandler = (event) => {
    setMeeting({ ...meeting, [event.target.name]: event.target.value });
  };
  
  const sendMeetingData = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/meetings/newmeeting', meeting)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={sendMeetingData} className="schedule-form">
        <h2>Next meeting:</h2>        
        <label>Date:</label>
          {/* <DatePicker name="date" placeholder="Date" /> */}
          <input 
          name="date"
          placeholder="Date:"
          onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Agenda:</label>
          <textarea
            name="agenda"
            placeholder="Agenda:"
            rows="6"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        

        <label>Context:</label>
          {/* <DatePicker name="date" placeholder="Date" /> */}
          <textarea 
          name="context"
          placeholder="Context:"
          rows="6"
          onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Start Time:</label>
          <input
            name="startTime"
            placeholder="Start Time:"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>End Time:</label>
          <input
            name="endTime"
            placeholder="End Time:"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Meeting Title:</label>
          <input
            name="meetingTitle"
            placeholder="Meeting title"
            onChange={(event) => changeHandler(event)}
          />
          <br />

        <label>Who is Needed?</label>
          <input
            name="whoIsNeeded"
            placeholder="Who is needed?"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Meeting Type:</label>
          <select name="meetingType" onChange={(event) => changeHandler(event)}>
            <option value="Decision Maker">Decision Maker</option>
            <option value="Relay Information">Relay Information</option>
            <option value="Brainstorm">Brainstorm</option>
            <option value="Social">Social</option>
          </select>
        <br />

        <label>Decisions to make:</label>
          <textarea
            rows="6"
            name="decisionsToMake"
            onChange={(event) => changeHandler(event)}
          />
        <br />
        <input type="submit" value="Schedule" />
      </form>
    </div>
  );
}

export default Scheduler;

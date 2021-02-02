import React, { useState } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Scheduler() {
  const [meeting, setMeeting] = useState({
    date: "",
    agenda: "",
    context: "",
    whoisneeded: "",
    meetingtitle: "",
    starttime: "",
    endtime: "",
    meetingtype: "",
    decisionstomake: "",
  });

  const changeHandler = (event) => {
    setMeeting({ ...meeting, [event.target.name]: event.target.value });
  };
  
  const sendMeetingData = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_DATABASE_URL}/api/meetings/newmeeting`, meeting)
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
      <form  onSubmit={sendMeetingData} className="schedule-form">
        <h2>Next meeting:</h2>        
        <label>Date:</label>
          {/* <DatePicker name="date" placeholder="Date" /> */}
          <input 
          name="date"
          placeholder="Date:"
          onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Start Time:</label>
          <input
            name="starttime"
            placeholder="Start Time:"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>End Time:</label>
          <input
            name="endtime"
            placeholder="End Time:"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Meeting Title:</label>
          <input
            name="meetingtitle"
            placeholder="Meeting title"
            onChange={(event) => changeHandler(event)}
          />
          <br />

        <label>Who is Needed?</label>
          <input
            name="whoisneeded"
            placeholder="Who is needed?"
            onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Meeting Type:</label>
          <select name="meetingtype" onChange={(event) => changeHandler(event)}>
            <option value="decisionmaker">Decision Maker</option>
            <option value="relayinformation">Relay Information</option>
            <option value="worktogether">Work Together</option>
            <option value="brainstorm">Brainstorm</option>
            <option value="feedback">Feedback</option>
            <option value="social">Social</option>
            <option value="recurring">Recurring</option>
          </select>
        <br />

        {/* <label>Agenda:</label>
          <textarea
            name="agenda"
            placeholder="Agenda:"
            rows="6"
            onChange={(event) => changeHandler(event)}
          />
        <br /> */}

        

        <label>Context:</label>
          {/* <DatePicker name="date" placeholder="Date" /> */}
          <textarea 
          name="context"
          placeholder="Context:"
          rows="6"
          onChange={(event) => changeHandler(event)}
          />
        <br />

        <label>Decisions/Questions/Points of discussion:</label>
          <textarea
            rows="6"
            name="decisionstomake"
            onChange={(event) => changeHandler(event)}
          />
        <br />
        <input type="submit" value="Schedule" />
      </form>
    </div>
  );
}

export default Scheduler;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Tracker(props) {
  const currentMeetingData = props.currentMeetingData;

  const history = useHistory();

  const [fromMeeting, setFromMeeting] = useState({
    agenda: currentMeetingData.agenda,
    context: currentMeetingData.context,
    date: Date.now(),
    decisionstomake: currentMeetingData.decisionstomake,
    whoIsneeded: currentMeetingData.whoisneeded,
    meetingtitle: currentMeetingData.meetingtitle,
    originalmeetingid: currentMeetingData.id,
    decisionresults: "",
    nextsteps: "",
    notes: "",
  });

  const changeHandler = (event) => {
    setFromMeeting({
      ...fromMeeting,
      [event.target.name]: event.target.value,
    });
  };

  const endMeeting = (event) => {
    event.preventDefault();
    debugger
    console.log(fromMeeting);
    console.log(`${process.env.REACT_APP_DATABASE_URL}`);
    axios.post(`${process.env.REACT_APP_DATABASE_URL}/api/meetings/meetingreport`, fromMeeting)
      .then(response => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="meeting-tracker-component">
      <h3 className="whiteText">{currentMeetingData.meetingtitle}</h3>
      <p className="whiteText">
        <u>
          <b>Who is needed:</b>
        </u>{" "}
        {currentMeetingData.whoisneeded}
      </p>
      <p className="whiteText">
        <u>
          <b>Context:</b>
        </u>{" "}
        {currentMeetingData.context}
      </p>
      <p className="whiteText">
        <u>
          <b>Agenda:</b>
        </u>{" "}
        {currentMeetingData.agenda}
      </p>
      <p className="whiteText">
        <u>
          <b>To Decide:</b>
        </u>{" "}
        {currentMeetingData.decisionstomake}
      </p>
      <br />

      <form className="ongoingmeetingform" onSubmit={endMeeting}>
        <label className="whiteText">Decisions Made:</label>
        <br />
        <textarea
          name="decisionresults"
          rows="8"
          placeholder="Results of decisions go here:"
          onChange={(event) => changeHandler(event)}
        />
        <br />
        <br />

        <label className="whiteText">Notes:</label>
        <br />
        <textarea
          name="notes"
          rows="8"
          placeholder="Results of decisions go here:"
          onChange={(event) => changeHandler(event)}
        />
        <br />
        <br />

        <label className="whiteText">Next Steps:</label>
        <br />
        <textarea
          name="nextsteps"
          rows="8"
          placeholder="What should be done next?"
          onChange={(event) => changeHandler(event)}
        />
        <br />
        <button onClick={endMeeting} type="submit">
          <h5 className="save-meeting-button">Save Meeting</h5>
        </button>
      </form>
    </div>
  );
}

export default Tracker;

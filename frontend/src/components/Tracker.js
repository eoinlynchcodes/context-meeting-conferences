import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Tracker(props){

    const currentMeetingData = props.currentMeetingData;

    const history = useHistory();

    const [ fromMeeting, setFromMeeting ] = useState({
        agenda: currentMeetingData.agenda,
        context: currentMeetingData.context,
        date: Date.now(), 
        decisionsToMake: currentMeetingData.decisionsToMake,
        whoIsNeeded: currentMeetingData.whoIsNeeded,
        meetingTitle: currentMeetingData.meetingTitle,
        decisionResults: "",
        nextSteps: "",
        notes: "",
    });

    const changeHandler = (event) => {
        setFromMeeting({
            ...fromMeeting,
            [event.target.name]: event.target.value
        });
    }

    const endMeeting = (event) => {
        event.preventDefault();
        
        console.log(fromMeeting);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/meetings/meetingresults`, fromMeeting)
        .then(response => {
            history.push('/dashboard');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div >
            <h2>Meeting Tracker</h2>
            <h5>{ currentMeetingData.meetingTitle }</h5>
            <p><u><b>Who is needed:</b></u> {currentMeetingData.whoIsNeeded}</p>
            <p><u><b>Context:</b></u> {currentMeetingData.context}</p>
            <p><u><b>Agenda:</b></u> {currentMeetingData.agenda}</p>
            <p><u><b>To Decide:</b></u> {currentMeetingData.decisionsToMake}</p>
            <br/>

            <form onSubmit={endMeeting}>
            <label>Decisions Made:</label><br/>
            <textarea 
            name="decisionResults"
            rows="8"
            placeholder="Results of decisions go here:"
            onChange={(event) => changeHandler(event)}
            />
            <br/><br/>

            <label>Notes:</label><br/>
            <textarea 
            name="notes"
            rows="8"
            placeholder="Results of decisions go here:"
            onChange={(event) => changeHandler(event)}
            />
            <br/><br/>

            <label>Next Steps:</label><br/>
            <textarea
            name="nextSteps"
            rows="8"
            placeholder="What should be done next?"
            onChange={(event) => changeHandler(event)}
            /><br/>
            <input type="submit" value="End &amp; Save Meeting" />
            </form>
        </div>
    );
}

export default Tracker;

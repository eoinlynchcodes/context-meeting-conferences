import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Report(){

    const [ meetingReport, setMeetingReport ] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DATABASE_URL}/api/meetings/meetingreports`)
        .then(response => {
            setMeetingReport(response.data)
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const history = useHistory();
    const goToReport = () => {
        history.push('/report');
    }

    return(
        <div className="report-container">
            <h2>Report goes here:</h2>
            {
                meetingReport.map((item, key) => {
                    return (
                        <div onClick={goToReport} className="report">
                            <h3>{item.meetingtitle}</h3>
                            <p>Date: {item.date}</p>

                            <h2>Outcomes:</h2>
                            <h4>Notes taken:<br/> {item.notes}</h4>
                            <h5>Decision Results:<br/> {item.decisionresults}</h5>
                            <h5>Next Steps:<br/> {item.nextsteps}</h5>

                            <br/>
                            <br/>

                            <h2>Prior Context:</h2>
                            <h5>Context: {item.context}</h5>
                            <h5>Agenda: {item.agenda}</h5>
                            <h5>Attendants: {item.whoIsNeeded}</h5>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Report;
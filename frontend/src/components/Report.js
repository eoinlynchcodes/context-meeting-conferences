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
            <h2>Reports:</h2>
            {
                meetingReport.map((item, key) => {
                    return (
                        <div onClick={goToReport} className="report">
                            <h2>Outcomes:</h2>
                            <h3>{item.meetingtitle}</h3>
                            <h5><u>Notes taken:</u><br/> {item.notes}</h5>
                            <h5><u>Results:</u><br/> {item.decisionresults}</h5>
                            <h5><u>Next Steps:</u><br/> {item.nextsteps}</h5>
                            <h5><u>Prior Context:</u>
                                <br/>{item.context}</h5>
                            {/* <h5>Attendants: {item.whoIsneeded}</h5> */}
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Report;
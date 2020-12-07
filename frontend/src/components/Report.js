import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Report(){

    const [ meetingReport, setMeetingReport ] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/meetings/meetingresults`)
        .then(response => {
            setMeetingReport(response.data)
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <div className="report">
            <h2>Report goes here:</h2>
            {/* {
                meetingReport.map((item, key) => {
                    return (
                        <div>
                            {item.agenda}
                        </div>
                    );
                })
            } */}

        </div>
    );
}

export default Report;
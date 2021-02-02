import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FutureMeetings() {
  const [meetingData, setMeetingData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DATABASE_URL}/api/meetings/`)
      .then(response => {
        setMeetingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="">
      <h2>Future Meetings:</h2>
        {meetingData.map(( item, key ) => {
          return (
            <div className="linebreaks individual-meeting">
              <h2>{item.meetingtitle}</h2>
              {console.log(item)}
              {/* <p><u><b>Agenda:</b></u> {item.agenda}</p> */}
              <p><u><b>When?</b></u><br/>{item.startTime}-{item.endTime}, {item.date}</p>
              <p><u><b>Context:</b></u><br/> {item.context}</p>
              <p><u><b>To decide:</b></u><br/> {item.decisionsToMake} </p>
              <p><u><b>Who is needed:</b></u><br/> {item.whoIsneeded} </p>
              <p><u><b>Date:</b></u><br/> {item.date} </p>
              <p><u><b>Discuss:</b></u><br/>{item.decisionstomake}
              </p>
              <Link className="goToMeetingText"
                to={{
                  pathname: "/ongoingmeeting",
                  state: {
                    item: item
                  }
                }}>
                <h5 className="goToMeetingText" >Go To Meeting</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FutureMeetings;

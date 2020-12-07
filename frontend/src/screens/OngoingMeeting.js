import React from "react";
import Navigation from "../components/SideNavigation";
import Videobox from "../components/Videobox";
import Tracker from "../components/Tracker";
import { useLocation } from 'react-router-dom';

function OngoingMeeting(){

  const location = useLocation();
  console.log(location.state.item);
  const currentMeetingData = location.state.item;

    return (
      
      <div className="ongoingmeeting">
        <section className="navigation">
          <Navigation />
        </section>

        <section className="videobox">
          <Videobox />
        </section>

        <section className="meetingTracker">
          <Tracker currentMeetingData={currentMeetingData}  />
        </section>
      </div>
    );
}

export default OngoingMeeting;

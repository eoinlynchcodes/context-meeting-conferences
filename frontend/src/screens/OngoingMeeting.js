import React from "react";
import Videobox from "../components/Videobox";
import Tracker from "../components/Tracker";
import { useLocation } from 'react-router-dom';
import SideNavigation from "../components/SideNavigation";

function OngoingMeeting(){

  const location = useLocation();
  console.log(location.state.item);
  const currentMeetingData = location.state.item;

    return (
      
      <div className="ongoingmeeting-div">
       <section className="side-navigation-section">
        <SideNavigation />
      </section>

        <section className="videobox">
          <Videobox />
        </section>

        <section className="meeting-tracker-section">
          <Tracker currentMeetingData={currentMeetingData}  />
        </section>
      </div>
    );
}

export default OngoingMeeting;

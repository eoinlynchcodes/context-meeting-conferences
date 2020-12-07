import React from "react";
import Scheduler from "../components/Scheduler";
import Report from "../components/Report";
import FutureMeetings from "../components/FutureMeetings";
import SideNavigation from "../components/SideNavigation";

function Dashboard() {
  return (
    <div className="schedule-meeting-div">
      <section>
        <SideNavigation />
      </section>
      <div>
        <div className="dashboard-section-one">
          <section>
            <Scheduler />
          </section>

          <section>
            <FutureMeetings />
          </section>
        </div>

        <section>
          <Report />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

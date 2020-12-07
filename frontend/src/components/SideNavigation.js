import React from "react";
import { Link } from "react-router-dom";

function SideNavigation() {
  return (
    <div className="side-nav">
      <Link to="/profile">
        <div>
          <h4 className="navigationTab">Profile</h4>
        </div>
      </Link>
      <Link to="/schedulemeeting">
        <div>
          <h4 className="navigationTab">Schedule</h4>
        </div>
      </Link>
      <Link to="/futuremeetings">
        <div>
          <h4 className="navigationTab">Future</h4>
        </div>
      </Link>
    </div>
  );
}

export default SideNavigation;

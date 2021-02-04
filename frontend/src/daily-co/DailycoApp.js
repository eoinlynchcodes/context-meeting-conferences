import React from 'react';
import VideoCallFrame from './VideoCallFrame';

function DailycoApp() {
  return (
    <div className="">
      <header className="">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
     

        <VideoCallFrame
          url={ process.env.REACT_APP_DAILY_ROOM_URL }
        ></VideoCallFrame>

      </header>
    </div>
  );
}

export default DailycoApp;

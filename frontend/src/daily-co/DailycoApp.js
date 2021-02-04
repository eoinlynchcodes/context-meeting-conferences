import React from 'react';
import VideoCallFrame from './VideoCallFrame';

function DailycoApp() {
  return (
    <div className="">
      <header className="">
        <VideoCallFrame
          url={ process.env.REACT_APP_DAILY_ROOM_URL }
        ></VideoCallFrame>

      </header>
    </div>
  );
}

export default DailycoApp;

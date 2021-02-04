import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../dailyco-components/App/DailyApp';
// import DailyApp from '../dailyco-components/App/DailyApp';
import DailycoApp from '../daily-co/DailycoApp';

function Videobox(){

    return(
        <div className="video-box">
            <h2>Videobox will go here.</h2>
            <DailycoApp/>
        </div>
    );
}

export default Videobox;
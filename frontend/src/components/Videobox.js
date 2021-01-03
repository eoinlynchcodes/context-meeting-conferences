import React from 'react';
import ReactDOM from 'react-dom';
import App from '../dailyco-components/App/DailyApp';
import DailyApp from '../dailyco-components/App/DailyApp';
import DailyIframe from '@daily-co/daily-js';

function Videobox(){

    return(
        <div className="video-box">
            <h2>Videobox will go here.</h2>
            <DailyApp/>
        </div>
    );
}

export default Videobox;
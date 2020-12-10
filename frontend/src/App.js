import React from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import OngoingMeeting from "./screens/OngoingMeeting";
import Dashboard from "./screens/Dashboard";
import LandingPage from './screens/LandingPage';
import Signup from './screens/Signup';
import Login from './screens/Login';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <LandingPage/>
        </Route>

        <Route exact path="/login" >
          <nav className="navfromsite">
            <h3>Context</h3>
          </nav>
          <Login/>
        </Route>

        <Route exact path="/signup">
          <nav className="navfromsite">
            <h3>Context</h3>
          </nav>
          <Signup/>
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/ongoingmeeting">
          <OngoingMeeting />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

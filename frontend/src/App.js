import React, { useState } from "react";
import axios from "axios";
import aine from "./images/aine.png";

function App() {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger
    console.log(user);
    axios
      .post(`postgres://ispxojanviaomr:8937dd5d5bb239d80bb96aab698d1f220e66f9980b8658cc14d031c243e401f1@ec2-54-75-248-49.eu-west-1.compute.amazonaws.com:5432/ddal8aprmvbv22/api/users/`, user)
      .then((response) => {
        setUser(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <nav>
        <h3 className="greenText">Context - Meeting Software</h3>
        {/* <div id="#joinWaitlist"  className="redButton">Request Access</div> */}
      </nav>

      <section className="sectionOne">
        <div className="mainHeading">
          <h1>
            Less meetings.
            <br />
            Better decisions.
            <br />
            Happier teams.
          </h1>

          <form id="#joinWaitlist"
            onSubmit={(event) => handleSubmit(event)}
            className="userDataCollection"
          >
            <h4  className="greenText">
              <u>Join our waitlist</u>
            </h4>
            <label>Name:</label>
            <input name="name" onChange={(event) => handleChange(event)} />
            <br />
            <label>Email:</label>
            <input name="email" onChange={(event) => handleChange(event)} />
            <br />
            <div onClick={handleSubmit} className="getEarlyAccess">
              <p>
                <b>Get early access</b>
              </p>
            </div>
          </form>
        </div>
        <div className="imageContainer">
          <img src={aine} alt="woman looking at computer during meeting" />
        </div>
      </section>

      <div className="container">
        <hr />
        {/* <CustomizedInputs/> */}
        <div className="forHeight">
          <section className="sectionTwo">
            <h3 className="whiteText">
              <u>Context</u> - Video Software for meetings.
            </h3>
              <ul>
                <li>See your agenda, decisions to be made, topics to discuss on screen throughout your video call.</li><br/>
                <li>Meeting results, decisions and outcomes are saved for reference later and to give people that weren't in the meeting context.</li><br/>
              <li>Make better decisions, faster using <i>Context video call software. </i></li><br/>
              <li>Keep meetings on topic executing what is required and achieving the outcomes hoped for.</li><br/>
              <li>Schedule, run and get insights into meetings using our clever
                interface, pulses, prompts, reminders and analytics.</li><br/>
              <li>Get full Context on your team's attitude, engagement and
                wellbeing.</li>
              </ul>
          </section>
        </div>

        <div className="forHeight">
          <section className="primaryBenefits">
            {/* Primary */}
            <div className="primary">
              <h4>
                <u>Better communication</u>
              </h4>
              <p>
                Have thoughtful and deliberate conversations with your team.
                <br /> Understand where you can improve communication with them.
              </p>
            </div>

            <div className="primary">
              <h4>
                <u>Improve Productivity</u>
              </h4>
              <p>
                A productive team is a happy team. Have context on how your team
                are receiving information during meetings using our
                'productivity pulse.'
              </p>
            </div>

            <div className="primary">
              <h4>
                <u>Less meetings</u>
              </h4>
              <p>
                More effective meetings mean less wasted time and more time
                available. Get more from your time.
              </p>
            </div>

            {/* Secondary */}
            {/* <div>
            <h5>Improving behaviours long term</h5>
            <p>free up your time! More effective meetings means less wasted time</p>
          </div>
          <div>
            <h5>Easier to review your staff based</h5>
            <p>Have metrics on how they your team are performing in their meetings. Be proactive in speaking with your team about issues, not reactive</p>
          </div>
          <div>
            <h5>One place, all of your meeting knowledge</h5>
            <p>One stop shop. No messing around. Set your meeting, have your meeting and review your meeting all in the one spot.</p>
          </div> */}
          </section>
        </div>

        <hr />

        <div className="forHeight">
          <section>
            <h3>
              <u>About</u>
            </h3>
            <p>
              Founded by two people who wanted to solve their own problem and
              were their first customers.
              {/* Following is directions written by Eoin. */}
              {/* For interested people to know more, make a connection, like us, want
            to invest, support us, get excited about using an early product,
            etc. Created by a leader from a global company and a softare
            engineer, Area vows to enable employees to become save time. . */}
              <br />
            </p>
          </section>
        </div>
      </div>

      <footer>
        <h5>
          <i>"Get it done with Context.."</i>
        </h5>
        <h5><span className="made">Made</span> <span className="in">in</span> <span className="ireland">Ireland.</span></h5>
        <h5 className="eoinlynch"><a href="https://eoinlynch.com">Code &amp; Design by Eoin Lynch.</a></h5>
      </footer>
    </div>
  );
}

export default App;


import React from "react";
import Accordion from "./Accordian";


function Content() {
  return (
    <div>
      <div className="question">
        <h1 className="subContainer">Frequently Asked Questions</h1>
        <div className="space-1">
        <Accordion/>
        </div>
        <br />
        <div className="cont-end">
          <div className="start">
            <p className="start" style={{ color: "white" }}>
              Ready to watch? Enter you email to create or restart you
              membership.
            </p>
            <div className="input-btn">
              <input
                className="input-cont-1"
                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email address"
              ></input>
              &nbsp;
              <button className="btn-1">
                <b>Get Started</b>&nbsp;
                <img className="abc" src="images/right.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="blank-body"></div>
    </div>
  );
}

export default Content;

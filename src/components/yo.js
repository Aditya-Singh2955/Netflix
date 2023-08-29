import React from 'react'

function Help() {
  return (
    <div className="question">
        
        
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

  )
}

export default Help
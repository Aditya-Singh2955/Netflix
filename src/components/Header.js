import React from "react";

export const Header = ({ setLanguage, language }) => {
  return (
    <div className="bbb">
      <div className="ppp">
        <div className="main">
          <div className="background-image image1">
            <div className="background-image image2">
              <div className="nav">
                <div className="sec1">
                  <img
                    className="netflixLogo"
                    src="images/netflix.png"
                    alt="Netflix Logo"
                  />
                </div>
                <div className="sec2">
                  <div className="select-bar">
                    <div className="select-bar-main">
                      <select
                        className="language"
                        onChange={(e) => {
                          setLanguage(e.target.value);
                          console.log("You selected: ", e.target.value);
                        }}
                        value={language}
                      >
                        <option style={{ color: "black" }} value="english">
                          &nbsp; &nbsp; 🌐English
                        </option>
                        <option style={{ color: "black" }} value="hindi">
                          &nbsp; &nbsp; 🌐Hindi
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="select-bar-btn">
                    <div className="select-bar-main-1">
                      <button className="btn-signup">
                        <b>Sign Up</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-cont">
                <div className="content">
                  <br />
                  <b>Unlimited movies, TV shows and more</b>
                  <br />
                  <p
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "-50px",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Watch anywhere. Cancel anytime.
                    <br />
                    <p className="p-cont">
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </p>
                  </p>
                  <div className="input-btn">
                    <input
                      className="input-cont"
                      placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email address"
                    ></input>
                    &nbsp;
                    <button className="btn">
                      <b>Get Started</b>
                      <img
                        className="abc"
                        src="images/right.png"
                        alt="Right Arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

function Headhindi({ setLanguage, language }) {
  return (
    <div className="bbb">
      <div className="ppp">
        <div className="main">
          <div className="background-image image1">
            <div className="background-image image2">
              <div className="nav">
                <div className="sec1">
                  <img
                    style={{
                      height: "150px",
                      marginTop: "-32px",
                      marginLeft: "175px",
                    }}
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
                        <option style={{ color: "black" }} value="english">&nbsp; &nbsp; 🌐English</option>
                        <option style={{ color: "black" }} value="hindi">&nbsp; &nbsp; 🌐Hindi</option>
                      </select>
                    </div>
                  </div>
                  <div className="select-bar-btn">
                    <div className="select-bar-main-1">
                      <button className="btn-signup">
                        <b>साइन अप</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-cont">
                <div className="content">
                  <br />
                  <b>असीमित फिल्में, टीवी शो और बहुत कुछ</b>
                  <br />
                  <p
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "-50px",
                      fontWeight: "400",
                    }}
                  >
                    कहीं भी देखो. किसी भी समय रद्द करें.
                    <br />
                    <p className="p-cont">
                      देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ
                      करने के लिए अपना ईमेल दर्ज करें
                    </p>
                  </p>
                  <div className="input-btn">
                    <input
                      className="input-cont"
                      placeholder="Email address"
                    ></input>
                    &nbsp;
                    <button className="btn">
                      <b>शुरू हो</b>
                      <img className="abc" src="images/right.png" alt="Right Arrow" />
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
}

export default Headhindi;

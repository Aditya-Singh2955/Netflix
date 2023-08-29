import React from "react";
export default function HelloBody() {
  return (
    <>
      <div className="blank-body"></div>
      <div className="cmd">
        <div className="cmd-sec-1">
          <div className="cmd-head">Enjoy on your TV</div>
          <p className="cmd-p">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="walter">
          <div className="walter-div-1">
            <img src="images/netflix.gif"></img>
          </div>
          <div className="cmd-sec-2">
            <div className="img-tv">
              <img src="images/tv.png" alt="TV"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="blank-body"></div>

      <div className="plank">
        <div className="plank_sec1">
          <div className="eleven-container">
            <img
              style={{ width: "40rem" }}
              className="eleven"
              src="images/eleven.jpg"
              alt=""
            />
          </div>
          <div className="eleven-container-1">
            <div className="info-eleven">
              <div className="content-eleven">
                <div className="fixing-eleven">
                  <div className="sec-one">
                    <img className="st" src="images/st.png"></img>
                  </div>
                  <div className="sec-two">
                    <img className="sta" src="images/stranger.png"></img>
                  </div>
                  <div className="sec-three">
                    <img className="stan" src="images/download.gif"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plank_sec2">
          <div className="text">Download your shows to watch offline</div>
          <p className="ptag">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="blank-body"></div>
      <div className="cmd">
        <div className="cmd-sec-3">
          <div className="cmd-head">Watch Anywhere</div>
          <p className="cmd-p">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="walt-white">
          <div className="ext">
            <div className="ext-1">
              <img className="abbcc" src="images/Extraction_2.gif"></img>
            </div>
          </div>
          <div className="cmd-sec-4">
            <img className="img-device" src="images/device.png" alt="TV"></img>
          </div>
        </div>
      </div>

      <div className="blank-body"></div>

      <div className="plank">
        <div className="plank_sec1">
          <img className="children" src="images/children.png"></img>
        </div>
        <div className="plank_sec2">
          <div className="texT">Create profiles for kids</div>
          <p className="peven">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="blank-body"></div>
    </>
  );
}

import React from 'react';
import Accnew from './Accnew';

function Contenthindi() {
  return (
    <>
    <div className="question">
        <h1 className="subContainer">अक्सर पूछे जाने वाले प्रश्नों</h1>
        <div className="space-1">
        <Accnew/>
        </div>
        <br />
        <div className="cont-end">
          <div className="start">
            <p className="start" style={{ color: "white" }}>
            देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें
            </p>
            <div className="input-btn">
              <input
                className="input-cont-1"
                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email address"
              ></input>
              &nbsp;
              <button className="btn-1">
                <b>शुरू हो जाओ</b>&nbsp;
                <img className="abc" src="images/right.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
        
        
        
        
    
    <div className='blank-body'></div>
        

    
    
</>
  )
}

export default Contenthindi
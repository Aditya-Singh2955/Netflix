import React from 'react'

function Footerhindi() {
    const data = [
        {
          name: "FAQ",
        },
        {
          name: "मीडिया केंद्र",
        },
        {
          name: "देखने के तरीके",
        },
        {
          name: "कुकी प्रेफ़रेंस",
        },
        {
          name: "स्पीड टेस्ट",
        },
      ];
      const value = [
        {
          name: "सहायता केंद्र",
        },
        {
          name: "सहायता केंद्र",
        },
        {
          name: "उपयोग की शर्तें",
        },
        {
          name: "कॉरपोरेट जानकारी",
        },
        {
          name: "कानूनी सूचनाएं",
        },
      ];
      const passkey = [
        {
          name: "अकाउंट",
        },
        {
          name: "नौकरियां",
        },
        {
          name: "प्रायवेसी",
        },
        {
          name: "हमसे संपर्क करें",
        },
        {
          name: "सिर्फ़ नेटफ्लिक्स पर",
        },
      ];
  return (
    <div>
      <div className="foot-content">
        <div className="foot-head">प्रशन? फ़ोन करो +91-9667984036</div>
        <div className="long-div">
          <div className="div-1">
            {data.map((item) => {
              return (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    height: "60px",
                    justifyContent: "center",
                    cursor:'pointer',
                    
                    color: "#969da8",
                    borderRadius:"0.125rem"

                  }}
                >
                 <a style={{color:'#969da8'}} href="https://www.w3schools.com"> {item.name}</a>
                </div>
              );
            })}
          </div>
          <div className="div-2">
          {value.map((item) => {
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: "60px",
                  justifyContent: "center",
                  cursor:'pointer',
                  
                  color: "#969da8",
                  borderRadius:"0.125rem"

                }}
              >
               <a style={{color:'#969da8'}} href="https://www.w3schools.com"> {item.name}</a>
              </div>
            );
          })}
          </div>
          <div className="div-3">
          {passkey.map((item) => {
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: "60px",
                  justifyContent: "center",
                  cursor:'pointer',
                  
                  color: "#969da8",
                  borderRadius:"0.125rem"

                }}
              >
               <a style={{color:'#969da8'}} href="https://www.w3schools.com"> {item.name}</a>
              </div>
            );
          })}
          </div>
        </div>
        <div className="sec7">
          <select className="language-1">
            <option>&nbsp; &nbsp; 🌐English</option>
            <option>&nbsp; &nbsp; 🌐Hindi</option>
          </select>
        </div>
        <div
          className='Aditya' style={{ marginLeft: "170px", paddingTop: "25px" }}
        >
        नेटफ्लिक्स इंडिया
        </div>
      </div>
    </div>
  )
}

export default Footerhindi
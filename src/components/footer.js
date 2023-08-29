import React from "react";

function footer() {
  const data = [
    {
      name: "FAQ",
    },
    {
      name: "Media Center",
    },
    {
      name: "Way to Watch",
    },
    {
      name: "Cookie Preferences",
    },
    {
      name: "Speed Test",
    },
  ];
  const value = [
    {
      name: "Help Centre",
    },
    {
      name: "Investor Relations",
    },
    {
      name: "Terms to Use",
    },
    {
      name: "Corporate Information",
    },
    {
      name: "Legal Notice",
    },
  ];
  const passkey = [
    {
      name: "Account",
    },
    {
      name: "Jobs",
    },
    {
      name: "Privacy",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Only on Netflix",
    },
  ];
  return (
    <div>
      <div className="foot-content">
        <div style={{color:"white"}} className="foot-head">Questions? Call +91-9667984036</div>
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
                    
                    color: "white",
                    borderRadius:"0.125rem"

                  }}
                >
                 <a style={{color:"white"}} href="https://www.w3schools.com"> {item.name}</a>
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
                  
                  color: "white",
                  borderRadius:"0.125rem"

                }}
              >
               <a style={{color:"white"}} href="https://www.w3schools.com"> {item.name}</a>
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
               <a style={{color:"white"}} href="https://www.w3schools.com"> {item.name}</a>
              </div>
            );
          })}
          </div>
        </div>
        <div className="sec7">
          <select className="language-1">
            <option> &nbsp; 🌐  &nbsp;English</option>
            <option>&nbsp; 🌐&nbsp; Hindi</option>
          </select>
        </div>
        <div
          className="Aditya" style={{ color: "white", marginLeft: "170px", paddingTop: "25px" }}
        >
          Netflix India
        </div>
      </div>
    </div>
  );
}

export default footer;

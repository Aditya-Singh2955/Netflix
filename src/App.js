import React, { useState } from "react";
import "./App.css";
import "./Responsive.css"
import { Header } from "./components/Header";
import HelloBody from "./components/body";
import Content from "./components/content";
import HeaderHindi from "./components/headhindi";
import BodyHindi from "./components/bodyhindi";
import ContentHindi from "./components/contenthindi";
import Footer from "./components/footer";
import Footerhindi from "./components/footerhindi";


function App() {
  const [language, setLanguage] = useState("english");

  return (
    <>
      {language === "english" ? (
        <div className="mobile">
          <Header setLanguage={setLanguage} language={language}/>
          <HelloBody />
          <Content />
          <Footer />
        </div>
      ) : (
        <div className="mobile">
          <HeaderHindi setLanguage={setLanguage} />
          <BodyHindi />
          <ContentHindi />
          <Footerhindi />
        </div>
      )}
    </>
  );
}

export default App;

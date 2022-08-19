import React from "react";
import { useNavigate } from "react-router-dom";
import mainCss from "./Main.css";

const Main = () => {
  let navigate = useNavigate();
  const sendHome = () => {
    navigate(`/home`);
  };

  return (
    <div class="background">
      <button className="homeButton" onClick={sendHome}>
        Press to Enter
      </button>
    </div>
  );
};

export default Main;

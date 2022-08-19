import React from "react";
import parkPals from "../images/Parkpals.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import homeCss from "./Home.css";
import jorgePortrait from "../images/IronHackPortrait.jpg";
import mongoDb from "../images/mongodb.png";
import nodeJs from "../images/nodejs.jpg";
import react from "../images/react.png";

const Home = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [photos, setPhotos] = React.useState([mongoDb, nodeJs, react]);

  const displayForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="mainDiv">
      {/* <div style={{ backgroundColor: "#8744CA" }}>
        <h1 style={{ color: "#fafafa" }}>Encanto</h1>
      </div>
      <div style={{ backgroundColor: "#212529" }}>
        <h1 style={{ color: "#fafafa" }}>Encanto</h1>
      </div>
      <div style={{ backgroundColor: "#FF99AC" }}>
        <h1 style={{ color: "#fafafa" }}>Encanto</h1>
      </div> */}
      <section className="sectionOne">
        <h1>Your next creative partner.</h1>
        <img src={jorgePortrait} alt="smiling man" className="portrait" />
        <h1>Jorge Velez.</h1>
      </section>
      <section className="sectionTwo">
        <p>
          I am React Developer, focused on creating functional, beautiful sites
          that engage users and provide exceptional experiences.{" "}
        </p>
      </section>
      <section className="sectionThree">
        <h2>About me</h2>
        <p>
          Hi! My name is Jorge. A child of the internet, just like you. Growing
          up I had an affinty for tinkering with games, always looking for
          exploits that would give me advantages, filling me with a sense of
          wonder because I did something that was outside the realm of what was
          possible to everyone else. Little did I know, this was just the
          beginning of something bigger.{" "}
        </p>
        <p>
          Years later and plenty of studies later. I am working now to build
          React applications with that same mindset. Building apps from nothing,
          priotizing wonder and any advantage I can give to the user.
        </p>
      </section>
      <section className="sectionFour">
        <h2>What do I work with?</h2>
        <div className="sectionFourElements">
          <ul>
            <li>Javascript (ES6)</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>ReactJSX</li>
            <li>NodeJS</li>
          </ul>
          <div className="companyImages">
            {photos.map(function (photo) {
              return <img src={photo} alt="app logo" />;
            })}
          </div>
        </div>
      </section>
      <section className="sectionFive">
        <h2>My projects</h2>
        <p>My projects</p>
        <img
          src={parkPals}
          alt="park pals company logo"
          style={{ width: "400px", height: "200px" }}
        />
      </section>
      <section className="sectionSix">
        <h2>Questions?</h2>
        <p>
          Please contact {""}
          <Contact />
        </p>
      </section>
    </div>
  );
};

export default Home;

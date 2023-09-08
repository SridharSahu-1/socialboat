import React from "react";
import "./LandingPage.css";
import Footer from "../Footer/Footer";

const LandingPage = ({ onClick }) => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <img
            src="https://ik.imagekit.io/socialboat/Component_6__1__CgPWY-2O0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663242315232"
            alt="Gym and Fitness Icon"
            className="gym-icon"
          />
          <h1 className="landing_heading">Welcome to Gym & Fitness</h1>
          <p className="landing_para">
            Discover a healthier you with our fitness programs and expert
            trainers.
          </p>
          <button className="explore_button" onClick={onClick}>
            Search Videos
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

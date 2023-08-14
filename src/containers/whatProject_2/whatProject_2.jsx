import React from "react";

import "./whatProject.scss";
import Feature from "../../componenets/features/feature";

const WhatProject_2 = () => {
  return (
    <div className="project-2__whatgpt3 section__margin " id="whpt3">
      <div className="project-2__whatgpt3-features">
        <Feature />
      </div>
      <div className="project-2__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="project-2__whatgpt3-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  );
};

export default WhatProject_2;

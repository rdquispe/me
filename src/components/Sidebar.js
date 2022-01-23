import React from "react";
// import briefCase from "../assets/briefcase.svg";
import homeRun from "../assets/home-run.svg";

const Sidebar = () => {
  return (
    <div class="leftpart">
      <div class="leftpart_inner">
        <div class="logo">
          <h3 class="name">Rodrigo Quispe</h3>
        </div>
        <div class="menu">
          <a href="/" class="active">
            <img src={homeRun} alt="homerun" class="svg" />
            <span class="menu_content">Home</span>
          </a>
          {/* <a href="/portfolio">
            <img src={briefCase} alt="briefcase" class="svg" />
            <span class="menu_content">Portfolio</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

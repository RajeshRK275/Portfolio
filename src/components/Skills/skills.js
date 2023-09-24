import React from "react";
import "./skills.css";
import UIDesigh from "../../assets/ui-design.png";
import WebDesigh from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm a Emerging software enthusiast proficient in coding, seeking
        opportunities to apply skills and contribute effectively in software
        development projects.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesigh} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demp para, fill it with frontend</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesigh} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is a demp para, fill it with backend</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demp para, fill it with AiMl</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

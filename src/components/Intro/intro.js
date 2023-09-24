import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Button, Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Rajesh</span>
          <br />
          Software Developer
        </span>
        <p className="introPara">
          I'm a skilled Software Developer with experience in building scalable,
          <br />
          robust and visually appealing applications.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
export default Intro;

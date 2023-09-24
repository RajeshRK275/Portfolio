import React, { useRef } from "react";
import "./contact.css";
import Wallmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import Adobe from "../../assets/adobe.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          In the realm of software, my expertise spans various domains, ensuring
          that clients receive tailored software solutions that meet their
          specific needs and drive success.
        </p>

        <div className="clientImgs">
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Wallmart} alt="Wallmart" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;

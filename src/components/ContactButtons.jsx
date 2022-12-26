import React from "react";
import iEmail from "../images/icons/mail.svg";
import iLinkedin from "../images/icons/linkedin.svg";

export default function () {
  return (
    <div className="contact row-flex">
      <button className="contactBtn row-flex">
        <img src={iEmail} />
        <span>Email</span>
      </button>
      <button className="contactBtn linkedin row-flex">
        <img src={iLinkedin} alt="" />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}

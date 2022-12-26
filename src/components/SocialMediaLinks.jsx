import React from "react";

import ifacebook from "../images/icons/facebook.svg";
import igithub from "../images/icons/github.svg";
import iinstagram from "../images/icons/instagram.svg";
import itwitter from "../images/icons/twitter.svg";

export default function () {
  return (
    <div className="footer row-flex">
      <div className="links row-flex">
        <a href="#" className="link">
          <img src={itwitter} alt="twitter" />
        </a>
        <a href="" className="link">
          <img src={ifacebook} alt="facebook" />
        </a>
        <a href="" className="link">
          <img src={iinstagram} alt="intagram" />
        </a>
        <a href="" className="link">
          <img src={igithub} alt="github" />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import ImageContainor from "./ImageContainor";
import ContentBody from "./ContentBody";
import SocialMediaLinks from "./SocialMediaLinks";

import "../styles/main.css";

export default function () {
  return (
    <div className="card">
      <ImageContainor />
      <ContentBody />
      <SocialMediaLinks />
    </div>
  );
}

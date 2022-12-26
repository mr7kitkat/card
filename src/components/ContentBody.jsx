import React from "react";
import ContentHeading from "./ContentHeading";
import ContactButtons from "./ContactButtons";
import About from "./About";
import Interests from "./Interests";

export default function () {
  return (
    <div className="content">
      <ContentHeading />
      <ContactButtons />
      <div className="info row-flex">
        <About />
        <Interests />
      </div>
    </div>
  );
}

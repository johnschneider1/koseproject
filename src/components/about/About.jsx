import React, { useState, useEffect } from "react";
import { AboutDiv, PhotoBox } from "./AboutStyles";
import AboutPhotos from "./aboutPhotos";

export default function About() {
  return (
    <AboutDiv>
      <h1>We are more than your average lifestlyle brand</h1>
      <h2>Mcgrane and Schneider copyright 2020</h2>
      <PhotoBox>
        <AboutPhotos />
      </PhotoBox>
    </AboutDiv>
  );
}

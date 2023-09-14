import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>skafsak</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          libero asperiores laboriosam eaque error explicabo natus odio quam.
          Accusantium dolore voluptatibus et praesentium ratione possimus hic
          magni quos. Natus, ipsum!
        </p>
        <p>
          <Link to="/">Back to homepage</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;

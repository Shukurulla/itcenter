import React from "react";
import { CourseInfo } from "../components";
import { aboutImage } from "../constants";

const About = () => {
  return (
    <main className="py-5 container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="">Achievements</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            officia ab eius sit nulla mollitia illo, nisi debitis corrupti
            molestias.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <CourseInfo title={"450"}  />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

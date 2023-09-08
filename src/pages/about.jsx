import { useContext, useEffect } from "react";
import { CourseInfo, TeamBox } from "../components";
import { aboutImage, courseInfo, teams,courses } from "../constants";
import { Context } from "../context";

const About = () => {
  document.title = "IT Center | About";

  const { setActive } = useContext(Context);
  useEffect(() => {
    setActive(1);
  }, []);

  return (
    <>
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
            <div className="row py-4  ">
              {courseInfo.map((item) => (
                <div
                  className="col-lg-4  col-md-4 col-sm-4  mt-3"
                  key={item.title}
                >
                  <CourseInfo
                    key={item.title}
                    title={item.title}
                    description={item.desription}
                    color={item.color}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <section className="team text-center py-5">
        <div className="container">
          <h2 className="py-3"> Meet Our Team</h2>
          <div className="row justify-content-center">
            {teams.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 my-3"
                key={item.image}
              >
                <TeamBox
                  name={item.name}
                  job={item.job}
                  image={item.image}
                  social={item.social}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

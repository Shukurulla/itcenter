import { useContext, useEffect, useState } from "react";
import { homeImage } from "../constants";
import { Button } from "../ui";
import "../styles/home.css";
import CourseBox from "../components/course-box";
import { useDispatch, useSelector } from "react-redux";
import { uiLoadingStart, uiLoadingSuccess } from "../slice/ui-slice";

const Home = () => {
  document.title = "Xojeli IT Center";

  const { courses, isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiLoadingStart());
    dispatch(uiLoadingSuccess("home"));
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="home container py-5">
        <div className="row py-5 align-items-center ">
          <div className="col-lg-6 col-md-12">
            <div className="home-about">
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                dolorem quo necessitatibus totam mollitia!
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <div className="home-image">
              <img className="w-100" src={homeImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="popular-courses py-5">
        <div className="container py-5">
          <h2 className="text-center mb-3">Mashhur kurslarimiz</h2>
          <div className="row">
            {courses.slice(0, 3).map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item.name}>
                <CourseBox
                  image={item.courseImage}
                  courseName={item.name}
                  briefInfo={item.brief_info}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

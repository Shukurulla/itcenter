import React, { useContext, useEffect } from "react";
import { courses } from "../constants";
import { CourseBox } from "../components";
import { Context } from "../context";

const Courses = () => {

  document.title = "IT Center | Kurslar";

  const {setActive} = useContext(Context)
  useEffect(() => {
    setActive(2)
  }, [])

  return (
    <div className="container py-5">
      <h2 className="text-center">Kurslar</h2>
      <div className="row justify-content-center">
        {courses.map((item) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 my-3"
            key={item.course}
          >
            <CourseBox
              briefInfo={item.brief_info}
              courseName={item.name}
              image={item.image}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

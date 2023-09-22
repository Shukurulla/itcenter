import { useContext, useEffect } from "react";
import { CourseBox } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { uiLoadingStart, uiLoadingSuccess } from "../slice/ui-slice";

const Courses = () => {
  document.title = "IT Center | Kurslar";

  const { courses } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiLoadingStart());
    dispatch(uiLoadingSuccess("courses"));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center">Kurslar</h2>
      <div className="row justify-content-center">
        {courses.map((item) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 my-3"
            key={item.name}
          >
            <CourseBox
              briefInfo={item.brief_info}
              courseName={item.name}
              image={item.courseImage}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

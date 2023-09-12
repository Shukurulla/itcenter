import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../ui";
import { useSelector } from "react-redux";

const Course = () => {
  const { slug } = useParams();
  const [showMenu, setShowMenu] = useState(false);

  const {courses} = useSelector(state => state.course)

  const course = courses.filter(c => c.slug == slug)

  const changeCourse = (name) => {
    document.title = `${name} kursi`;
    setShowMenu(!showMenu);
  };

  return (
    <div className="course py-5">
      <div className="container py-5">
        {course.map((item) => (
          <div className="row" key={item.name}>
            <div className="col-lg-7 col-md-12 mt-3 col-sm-12">
              <div className="course-nav">
                <div
                  className="select-course-name fw-bold fs-5 pointer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {item.name} <i className="bi bi-chevron-down"></i>
                </div>
                {showMenu && (
                  <ul className=" course-menu">
                    {courses.map((item) => (
                      <li
                        onClick={() => changeCourse(item.name)}
                        key={item.name}
                      >
                        <Link to={`/courses/${item.slug}`}>
                          <i className={item.icon}></i> <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="my-4">
                <div className="course-name ">{item.name}</div>
              </div>
              <h4 className="fw-bold"> {item.name}</h4>
              <small>{item.info}</small>
              <hr />
              <h4 className="d-flex justify-content-between fw-bold">
                <span>O`qituvchi:</span>
                <span>{item.mentor}</span>
              </h4>
              <ul className="p-0 my-3">
                <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-journal-bookmark-fill"></i>
                    <span>Darslar</span>
                  </div>
                  <div>{item.course}</div>
                </li>
                <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-alarm"></i>
                    <span>Davomiyligi</span>
                  </div>
                  <div>{item.duration}</div>
                </li>
                <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-award"></i>
                    <span>Seritficat</span>
                  </div>
                  <div>{item.sertificat}</div>
                </li>
                <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-currency-dollar"></i>
                    <span>Kurs Narxi</span>
                  </div>
                  <div>{item.price}</div>
                </li>
                <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-code-slash"></i>
                    <span>Texnologiyalar</span>
                  </div>
                  <div>{item.tech}</div>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-12 mt-3 col-sm-12 text-center">
              <div className="img">
                <img className="w-100 mb-4" src={item.courseImage} alt="" />
                <Link to={"/contact"}>
                  <Button>Kursga Yozilish</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

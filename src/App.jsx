import { Footer, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import { About, Course, Courses, Home, Contact } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  courseLoadingFailure,
  courseLoadingStart,
  courseLoadingSuccess,
} from "./slice/course";
import { CourseService } from "./service/course-service";
import { MentorServices } from "./service/mentor-service";
import { mentorLoadingStart, mentorLoadingSuccess } from "./slice/mentor";
import { userService } from "./service/user-service";
import { userLoadingSuccess } from "./slice/user";

const App = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.ui);

  const getCourses = async () => {
    const { data } = await CourseService.getCourses();
    localStorage.setItem("courses", JSON.stringify(data));
    dispatch(courseLoadingSuccess(data));
  };

  const getMentors = async () => {
    const { data } = await MentorServices.getMentors();
    dispatch(mentorLoadingSuccess(data));
  };

  const getUsers = async () => {
    const { data } = await userService.getUsers();
    dispatch(userLoadingSuccess(data));
  };

  useEffect(() => {
    dispatch(courseLoadingStart());
    try {
      getCourses();
      getMentors();
      getUsers();
    } catch (error) {
      dispatch(courseLoadingFailure(error));
    }
    console.log(active);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path={`/courses/:slug`} element={<Course />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

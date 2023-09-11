import { Footer, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import { About, Course, Courses, Home, Contact } from "./pages";
import { useState } from "react";
import { Context } from "./context";
import { courses } from "./constants";

const App = () => {
  const [active, setActive] = useState(0);
  const value = { active, setActive };

  

  return (
    <>
      <Context.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path={`/courses/:slug`} element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;

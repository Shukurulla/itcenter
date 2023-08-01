import { Footer, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import { About, Course, Courses, Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path={`/courses/:slug`} element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import { Footer, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import { About, Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Projectdisplay from "./pages/Projectdisplay";
import "react-vertical-timeline-component/style.min.css";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Projects" element={<Projects />}></Route>
          <Route path="project/:id" element={<Projectdisplay />} />
          <Route path="Experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

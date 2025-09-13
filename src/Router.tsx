import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Introduce from "./pages/Introduce";
import DetailProject from "./pages/DetailProject";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/project/:id" element={<DetailProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

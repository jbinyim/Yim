import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

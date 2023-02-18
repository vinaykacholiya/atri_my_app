import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  );
}

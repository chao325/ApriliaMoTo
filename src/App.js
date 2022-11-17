import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homes";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
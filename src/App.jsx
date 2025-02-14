import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Ai from "./pages/Ai/Ai";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </Router>
  );
}

export default App;

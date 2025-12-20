import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./pages/Links";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;

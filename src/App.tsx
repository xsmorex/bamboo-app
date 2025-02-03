import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import NotFound from "./pages/NotFount";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

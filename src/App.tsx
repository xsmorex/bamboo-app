import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import About from "./pages/About";
import NotFound from "./pages/NotFount";
import Layout from "./components/Layout";

function App() {
  return (
    // <Router>
    //   <Sidenav />
    //   <div className="sm:ml-64">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    // </Router>

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

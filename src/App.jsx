import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import Footer from "./components/Footer";
import AskQuestion from "./pages/AskQuestion";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/askQuestion" element={<AskQuestion />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    Aos.init()
  } , [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

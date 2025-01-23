import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import NewsApi from "./routes/NewsApi";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsapi" element={<NewsApi />} />
      </Routes>
    </div>
  );
}

export default App;

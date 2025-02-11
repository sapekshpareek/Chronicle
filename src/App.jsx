import { Box } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import GNews from "./routes/GNews";
import Home from "./routes/Home";
import NewsApi from "./routes/NewsApi";
import TheNewsApi from "./routes/TheNewsApi";
// import './App.css'

function App({ mode }) {
  const [count, setCount] = useState(0);
  const GNews_API = String(import.meta.env.VITE_GNEWS_API);
  const News_Org_API = String(import.meta.env.VITE_NEWS_ORG_API);
  const The_News_API = String(import.meta.env.VITE_THE_NEWS_API);
  const theme_mode = mode;

  return (
    <Box sx={{ minHeight: "100vh"}}>
      <Navbar mode={theme_mode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/newsapi" element={<NewsApi api={News_Org_API} />} />
        <Route path="/thenewsapi" element={<TheNewsApi api={The_News_API} />} />
        <Route path="/gnews" element={<GNews api={GNews_API} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;

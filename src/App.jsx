import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App


import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";

import Signup from './components/Signup';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import Logs from './components/admin/Logs';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/*" element={<NotFound/>} />
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/logs" element={<Logs/>} />
      </Route>
    </Routes>
  )
}

export default App


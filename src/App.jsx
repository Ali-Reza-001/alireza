import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import ResendCodePage from "./components/ResendCodePage";

import RequireAuth from "./utils/RequireAuth";
import SignForm from './components/Sign';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import Logs from './components/admin/Logs';
import Users from "./components/admin/Users";
import UserPage from "./components/admin/UserPage";
import Account from "./components/Account";
import EditUser from "./components/admin/EditUser";
import OfficialEmail from "./components/admin/OfficialEmail";
import useSocket from "./hooks/useSocket";
import useInitialRequest from "./hooks/useInitialRequest";
import UploadBlog from "./components/UploadBlog";

function App() {

  useSocket();
  useInitialRequest();


  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/sign" element={<SignForm/>} />
        <Route path="/upload-blog" element={<UploadBlog/>} />
        <Route path="/resend" element={<ResendCodePage/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/*" element={<NotFound/>} />
      </Route>
      <Route path="/admin" element={
        <RequireAuth>
          <AdminLayout/>
        </RequireAuth>
      }>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/logs" element={<Logs/>} />
        <Route path="/admin/users" element={<Users/>} />
        <Route path="/admin/official-email" element={<OfficialEmail/>} />
        <Route path="/admin/user/:id" element={<UserPage/>} />
        <Route path="/admin/edit-user/:id" element={<EditUser/>} />
      </Route>
    </Routes>
  )
}

export default App


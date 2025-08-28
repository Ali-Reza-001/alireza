import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Aside = ({open, setOpen}) => {

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[99] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-16 left-0 h-full w-64 bg-[#333] text-white z-[100] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

            <nav className="flex flex-col p-4 space-y-4 text-lg mt-10">
                <Link to="/" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">Home</Link>
                <Link to="/about" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">About</Link>
                <Link to="/skills" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">Skills</Link>
                <Link to="/projects" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">Projects</Link>
                <Link to="/blogs" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">Blogs</Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="w-11/12 mx-auto px-2 pb-2 border-b border-white/30 hover:underline">Contact</Link>
            </nav>
      </div>
    </>
  );
};

export default Aside;
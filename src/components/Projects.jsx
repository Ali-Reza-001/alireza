import { FaCss3, FaElementor, FaHtml5, FaJs, FaMailchimp, FaWordpress } from "react-icons/fa6";
import BreadCrumb from "./assets/BreadCrumb";
import projects from "../data/projects";
import { VscOrganization } from "react-icons/vsc";
import { BsCalendar2Date } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

import { Link } from "react-router-dom";

import { motion } from 'framer-motion';


const LangBox = ({data}) => {

  let Icon,color,name;
  if (data === 'wordpress') {Icon = FaWordpress;color = 'text-blue-600';name = 'WordPress'}
  else if (data === 'elementor') {Icon = FaElementor;color = 'text-purple-600';name = 'Elementor'}
  else if (data === 'mailchimp') {Icon = FaMailchimp;color = 'text-gray-500';name = 'Mailchimp'}
  else if (data === 'html') {Icon = FaHtml5;color = 'text-orange-600';name = 'HTML'}
  else if (data === 'css') {Icon = FaCss3;color = 'text-blue-600';name = 'CSS'}
  else if (data === 'js') {Icon = FaJs;color = 'text-yellow-400';name = 'JavaScript'}
  else  {Icon = FaWordpress;color = 'text-blue-600';name = 'Unkown'}

  return (
    <div className="inline p-1 bg-white/20 rounded-[1rem]">
      <div className="flex items-center">
        <Icon className={` text-4xl font-bold bg-white rounded-xl p-1 ${color}`}/>
        <p className="text-md text-white/95 text-center px-2">{name}</p>
      </div>
    </div>
  )
}

const ProjectBox = ({data, index}) => {


  const name = data.name;
  const des = data.des;
  const img = data.img;
  const logo = data.logo;
  const date = data.date;
  const link = data.link;
  const langs = data.langs;

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -300 : 300 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="will-change-transform w-full bg-white/20 rounded-[2rem] p-4 mt-10"
    >
      <div className="w-full">
        <div className="flex">
          <div className="lg:w-1/2 w-full bg-white p-1 rounded-[2rem]">
            <img src={img} alt={name} className="w-full rounded-[2rem]" />
          </div>
          <div className="lg:w-1/2 w-full pl-10">
            <img src={logo} alt="logo" className="h-20 bg-white/20 px-8 py-2 mb-4 rounded-[1rem] drop-shadow-2xl brightness-125"/>
            <p className="text-white text-xl mt-1 flex gap-4"><VscOrganization className="text-2xl" /> {name}</p>
            <p className="text-white text-xl mt-1 flex gap-4"><BsCalendar2Date className="text-2xl" /> {date}</p>
            <Link to={link} className="text-white text-xl mt-1 flex gap-4 underline"><FaLink  className="text-2xl" /> {link}</Link>
            <hr className="w-[96%] h-[2px] mx-auto my-4 bg-white/80"/>
            <div className="w-full flex justify-start gap-2 flex-wrap">
              {langs.map((lang, i) => <LangBox data={lang} key={i}/>)}
            </div>
          </div>
        </div>
        <p className="text-xl text-white/80 p-8">{des}</p>
      </div>
    </motion.div>
  )
}

const Projects = () => {

  return (
    <section className="w-full min-h-screen pt-16 bg-black/80 text-white">
      <BreadCrumb title={'Projects'}/>
      <div className="lg:w-10/12 mx-auto w-full px-6 py-20 ">
        {projects.map((project, index) => <ProjectBox data={project} index={index} key={index} />)}
      </div>
    </section>
  )
}

export default Projects
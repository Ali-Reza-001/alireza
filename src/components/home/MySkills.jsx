
import { FaWordpress } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


import { motion } from 'framer-motion';

const LangBox = ({ data, index }) => {
  const Icon = data.icon;
  const color = data.color;
  const name = data.name;
  const des = data.des;

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="will-change-transform lg:w-[32%] w-full mt-4 p-4 border-2 border-white/70 bg-white/20 flex justify-between items-center "
    >
      <div className="relative w-32 text-center">
        <Icon className={`text-[5rem] drop-shadow-lg drop-shadow-white ${color}`} />
      </div>
      <div className="w-full text-left">
        <h1 className="text-2xl text-white">{name}</h1>
        <p className="text-md text-white/60">{des}</p>
      </div>
    </motion.div>
  );
};


const MySkills = () => {

  const Langs = [
    {
      icon: FaWordpress,
      color: 'text-blue-500',
      name: 'WordPress',
      des: 'A powerful PHP-based CMS for building customizable websites and blogs. I specialize in theme and plugin customization.'
    },
    {
      icon: FaHtml5,
      color: 'text-orange-500',
      name: 'HTML',
      des: 'The backbone of web structure—used to create semantic, accessible interfaces.'
    },
    {
      icon: IoLogoCss3,
      color: 'text-blue-500',
      name: 'CSS',
      des: 'Used to style and layout web pages. I work with both vanilla CSS and utility-first frameworks like Tailwind.'
    },
    {
      icon: FaJsSquare,
      color: 'text-yellow-400',
      name: 'JavaScript',
      des: 'The language of interactivity—drives dynamic behavior across front-end and back-end.'
    },
    {
      icon: RiTailwindCssFill,
      color: 'text-blue-400',
      name: 'Tailwind CSS',
      des: 'A utility-first CSS framework that speeds up styling with responsive, reusable classes.'
    },
    {
      icon: FaReact,
      color: 'text-sky-400',
      name: 'React',
      des: 'A JavaScript library for building fast, scalable single-page applications with reusable components.'
    },
    {
      icon: FaNodeJs,
      color: 'text-green-600',
      name: 'Node.js',
      des: 'A JavaScript runtime that powers server-side logic and APIs for full-stack applications.'
    },
    {
      icon: SiExpress,
      color: 'text-white/80',
      name: 'Express.js',
      des: 'A minimalist Node.js framework for building robust RESTful APIs and server-side apps.'
    },
    {
      icon: SiMongodb,
      color: 'text-green-500',
      name: 'MongoDB',
      des: 'A NoSQL database that stores data in flexible, JSON-like documents—ideal for modern web apps.'
    }
  ]

  return (
    <section className="w-full py-12 bg-[#333] text-center text-white">
        <h1 className="text-3xl">Skills </h1>
        <p className="text-xl lg:w-2/3 w-11/12 text-white/80 text-center mx-auto mt-4">
          These are the tools I use to build scalable, user-focused web solutions—from sleek interfaces to powerful back-end systems.
        </p>
        <div className="w-11/12 mx-auto mt-10 lg:flex flex-wrap gap-4">
          {Langs.map(lang => <LangBox data={lang} key={lang.name} />)}
        </div>
    </section>
  )
}

export default MySkills
import { FaElementor, FaGitAlt, FaGithub, FaHtml5, FaJs, FaMailchimp, FaNodeJs, FaNpm, FaReact, FaWordpress } from "react-icons/fa6";
import BreadCrumb from "./assets/BreadCrumb";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiMongodb, SiMongoose, SiTailwindcss } from "react-icons/si";

import { motion } from 'framer-motion';




const LangBox = ({data}) => {

  let Icon = data.Icon;
  let name = data.name;
  let color = data.color;

  return (
    <div className="inline p-1 bg-white/20 rounded-[1rem]">
      <div className="flex items-center">
        <Icon className={` text-4xl font-bold bg-white rounded-xl p-1 ${color}`}/>
        <p className="text-lg text-white/95 text-center px-4">{name}</p>
      </div>
    </div>
  )
}

const SkillBox = ({data, index}) => {

  let title = data.title;
  let des = data.des;
  let img = data.img;
  let ltr = data.ltr;
  let langs = data.langs;

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -300 : 300 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="will-change-transform w-full bg-white/20 rounded-[2rem] p-4 mt-10"
    >
      <div className={`w-full flex flex-wrap justify-between ${ltr && 'lg:flex-row-reverse'}`}>
        <div className="lg:w-2/5 w-full bg-white p-2 rounded-[1rem] flex items-center">
          <img src={img} alt={title} className="rounded-[1rem] rounded-br-[10rem]" />
        </div>
        <div className="lg:w-3/5 w-full lg:p-4 lg:mt-0 mt-6">
          <h1 className="text-3xl font-bold text-white px-2 lg:px-4">{title}</h1>
          <p className="text-lg text-white/80 px-2 lg:px-4 pt-4 lg:text-left text-justify">
            {des}
          </p>
          <hr className="w-11/12 h-[2px] mx-auto my-4 bg-white/80"/>
          <div className=" w-full flex justify-start px-4 gap-2 flex-wrap">
            {langs.map((lang,index) => <LangBox data={lang} key={index}/>)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {

  const skills = [
    {
      title: 'Front-End Development',
      des: 'Front-end development focuses on crafting the visual and interactive elements of a website or application that users directly engage with. It involves building responsive layouts, dynamic interfaces, and seamless user experiences using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. A strong front-end ensures clarity, speed, and accessibility across all devices.',
      img: 'Skills/10780416_19199697.svg',
      ltr: true,
      langs: [
        { Icon: FaHtml5, name: 'HTML', color: 'text-orange-500'},
        { Icon: IoLogoCss3, name: 'CSS', color: 'text-blue-600'},
        { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-400'},
        { Icon: FaReact, name: 'React', color: 'text-blue-400'},
        { Icon: SiTailwindcss, name: 'Tailwind', color: 'text-blue-400'}
      ]
    },
    {
      title: 'Back-End Development',
      des: 'Back-end development powers the logic, data handling, and server-side operations behind the scenes. It manages APIs, databases, authentication, and application performance using tools like Node.js, Express.js, Git, and NPM. A solid back-end ensures security, scalability, and reliability for every user interaction.',
      img: 'Skills/5842254_3037828.svg',
      ltr: false,
      langs: [
        { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500'},
        { Icon: FaNpm, name: 'NPM', color: 'text-gray-500'},
        { Icon: SiExpress, name: 'Express.js', color: 'text-gray-900'},
        { Icon: FaGitAlt, name: 'Git', color: 'text-orange-600'},
      ]
    },
    {
      title: 'Full & MERN Stack Development',
      des: 'MERN stack development combines the power of MongoDB, Express.js, React, and Node.js to build full-stack web applications. It enables developers to handle both client-side and server-side logic in a unified JavaScript environment. This approach ensures fast development cycles, modular architecture, and real-time data flow across the entire app.',
      img: '/Skills/25561384_7090544.jpg',
      ltr: true,
      langs: [
        { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500'},
        { Icon: SiExpress, name: 'Express.js', color: 'text-gray-900'},
        { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500'},
        { Icon: FaReact, name: 'React', color: 'text-blue-400'},
      ]
    },
    {
      title: 'Database Development',
      des: 'Database development involves designing, managing, and optimizing data storage systems that support application functionality. Using tools like MongoDB and Mongoose, developers structure data models, enforce validation, and ensure efficient querying. Git and version control help maintain integrity and collaboration across evolving data schemas.',
      img: '/Skills/4332351_18907.svg',
      ltr: false,
      langs: [
        { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500'},
        { Icon: SiMongoose, name: 'Mongoose', color: 'text-red-800'},
        { Icon: FaGithub, name: 'Github', color: 'text-gray-600'},
      ]
    },
    {
      title: 'Content Mangement System',
      des: 'CMS development empowers clients to manage and update website content without touching code. Platforms like WordPress, Elementor, and Mailchimp offer customizable themes, drag-and-drop interfaces, and marketing integrations. A well-built CMS balances flexibility, performance, and ease of use — perfect for businesses and creators alike.',
      img: '/Skills/11754543_4804444.svg',
      ltr: true,
      langs: [
        { Icon: FaWordpress, name: 'WordPress', color: 'text-blue-700'},
        { Icon: FaElementor, name: 'Elementor', color: 'text-purple-700'},
        { Icon: FaMailchimp, name: 'Mailchimp', color: 'text-gray-700'},
      ]
    }
  ]


  return (
    <section className="w-full min-h-screen pt-16 bg-black/80 text-white">
      <BreadCrumb title={'Skills'}/>
      <div className="lg:w-10/12 mx-auto w-full lg:px-6 px-3 py-20 ">
        {skills.map((skill, index) => <SkillBox data={skill} index={index} key={index}/>)}
      </div>
    </section>
  )
}

export default Skills
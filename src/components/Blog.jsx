
import BreadCrumb from "./assets/BreadCrumb";
import blogs from "../data/blogs";

import { motion } from 'framer-motion';
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";

const BlogBox = ({data, index}) => {

  const sub = data.sub;
  const des = data.des;
  const img = data.img;
  const category = data.category;
  const author = data.author;
  const date = data.date;
  const authorImg = data.authorImg;

  return (
    <motion.div
      key={sub}
      initial={{ opacity: 0, scale: 0.7, y: -100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="will-change-transform w-full bg-white/20 rounded-[2rem] lg:p-4 p-2 mt-10"
    >
      <div className="w-full">
        <div className="w-full lg:flex items-start py-4 px-2 transition-all duration-300">
          <div className="w-full lg:w-1/2 aspect-video bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${img})`}}>
          </div>
          <div className="w-full lg:w-1/2 lg:px-4 px-2">
            <div className="w-full flex justify-between lg:items-center lg:mt-0 mt-8 lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse">
              <h1 className="text-white text-3xl pb-4 lg:my-0 my-4">{sub}</h1>
              <div className="flex justify-between items-center gap-4 border border-white rounded-xl p-2 -mt-4 hover:bg-white/20">
                <TbCategoryPlus className="text-white text-3xl" />
                <h3 className="w-fit text-xl text-white font-bold  ">{category}</h3>
              </div>
            </div>
            <p className="w-full text-xl text-white/80 lg:text-left text-justify">{des}</p>
            <hr className="w-[96%] h-[2px] mx-auto my-4 bg-white/80"/>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex justify-start gap-2 items-center ">
                <div className="text-xl font-bold text-white bg-pink-600 p-2 leading-3 rounded-full grid place-content-center">{authorImg ? <img src={authorImg}/> : author.slice(0,1)}</div>
                <h3 className="w-fit text-lg text-white hover:underline cursor-pointer">{author}</h3>
              </div>
              <div className="flex justify-start gap-2 items-center ">
                <IoCalendarNumberOutline className="text-white text-2xl font-thin" />
                <h3 className="w-fit text-lg text-white">{date}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )

}

const Blog = () => {
  return (
    <section className="w-full min-h-screen pt-16 bg-black/80 text-white">
      <BreadCrumb title={'Blog'}/>
      <div className="lg:w-10/12 mx-auto w-full px-2 lg:px-6 py-10 lg:py-20 ">
        <div className="w-full flex gap-4">
          <div className="w-full bg-white/10 rounded-[2rem] lg:p-8 p-4">
            {blogs.map((blog, index) => <BlogBox data={blog} key={index} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
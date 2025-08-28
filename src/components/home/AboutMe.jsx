import { Link } from 'react-router-dom';

import BorderSec from "../assets/BorderSec";


const AboutMe = () => {
  return (
    <section className='w-full relative lg:bg-[url("bg.jpg")] bg-[url("bgMobile.jpg")] bg-contain'>
        <div className="w-full md:flex lg:w-11/12 mx-auto block py-10 lg:py-20">
          <div className='text-center lg:w-1/3 w-5/6 mx-auto lg:-rotate-12 hover:rotate-0 transition-all duration-500'>
            <img src="profile.png" alt="" className="w-full rounded-[3rem] transition-all duration-500 rounded-br-lg shadow-xl hover:shadow-2xl shadow-black/30 hover:shadow-black/60 border-2 border-gray-300" />
          </div>
          <div className='xl:w-1/2 w-full p-2 lg:pl-8 lg:rotate-12 hover:rotate-0 transition-all duration-500'>
            <div className="w-11/12 mx-auto bg-white p-4 px-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:rotate-0 shadow-black/30 hover:shadow-black/60">
              <h1 className="text-3xl text-black text-left p-4 inline-block ">About Me ...</h1>
              <p className="text-xl text-justify text-black/80">
                <span className='text-4xl pr-2'>&#8220;</span>
                I'm Alireza Ahmadi, a MERN stack developer and designer passionate about building purposeful web experiences. From React and Tailwind to WordPress customization and domain management, I blend creativity with precision. My workflow is rooted in discipline, growth, and digital ownership—every project is a step toward meaningful impact. Let’s collaborate and build something meaningful together.
                <span className='text-4xl p-2 leading-4 relative'><span className='absolute bottom-0'>&#8221;</span></span>
              </p>
              <Link to={'/about'} className="inline-block px-8 py-2 mt-4 rounded-2xl bg-gray-400 text-white">Read More ...</Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutMe
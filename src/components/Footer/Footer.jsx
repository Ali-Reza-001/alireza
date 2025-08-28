import { FaArrowRightLong, FaFacebook, FaFreeCodeCamp, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6"
import { SiFreelancer } from "react-icons/si";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='w-full bg-black/80'>
        <div className="lg:w-11/12 w-full mx-auto flex justify-around flex-wrap py-10">
            <div className='lg:w-1/4 md:w-1/2 w-full p-4'>
                <img src="logo.png" alt="logo" className='w-20'/>
                <p className='text-md text-white/80 text-justify'>
                I’m Alireza, a software developer. To me, development isn’t just about writing code—it’s about turning ideas into something meaningful and useful.
                </p>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full p-4'>
                <h1 className="text-2xl text-white font-bold mb-4">Tech Stack</h1>
                <ul className="list-disc list-inside text-white/80 text-md space-y-2">
                    <li>React & Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB</li>
                    <li>WordPress Customization</li>
                </ul>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full p-4'>
                <h1 className="text-2xl text-white font-bold mb-4">NewsLetter</h1>
                <p className='text-md text-white/80 text-justify'>
                Please Sign-Up to get a Newsletter account and be noticeable when there is a new post.
                </p>
                <div className=" relative w-full my-6">
                    <Link to={'/signup'} className="block w-full py-2 text-center text-xl text-black/80 bg-white/90 rounded-full border-2 border-white/90 hover:bg-transparent hover:text-white/90 transition duration-500">Sign Up</Link>
                </div>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full p-4'>
                <h1 className="text-2xl text-white font-bold mb-4">Contact Me</h1>
                <div className="w-full">
                    <div className="w-11/12 mx-auto lg:border-b-2 border-b lg:border-white/80 border-white/40 text-xl flex gap-4 items-center justify-start p-2">
                        <MdPhoneAndroid className="text-white text-2xl" />
                        <a href="tel:+93779582830" className="text-white/80 text-md">+93 (0) 779 582 830</a>
                    </div>
                    <div className="w-11/12 mx-auto lg:border-b-2 border-b lg:border-white/80 border-white/40 text-xl flex gap-4 items-center justify-start p-2">
                        <IoMail className="text-white text-2xl" />
                        <a href="mailto:alirezaahmadi008hero@gmail.com" className="text-white/80 text-md">alirezaahmadi_00...</a>
                    </div>
                    <div className="w-11/12 mx-auto lg:border-b-2 border-b lg:border-white/80 border-white/40 text-xl flex gap-4 items-center justify-start p-2">
                        <BiSolidMap className="text-white text-2xl" />
                        <p className="text-white/80 text-md">Kabul, Afghanistan</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex items-center">
            <hr className="w-full h-[2px] bg-white/50"/>
            <div className=" flex justify-around mx-8">
                <a href="https://facebook.com" aria-label="facebook"><FaFacebook className="text-3xl transition-all duration-500 text-white/60 mx-2 hover:text-white"/></a>
                <a href="https://whatsapp.com" aria-label="whatsapp"><FaWhatsapp className="text-3xl transition-all duration-500 text-white/60 mx-2 hover:text-white"/></a>
                <a href="https://linkedin.com" aria-label="linkedin"><FaLinkedin className="text-3xl transition-all duration-500 text-white/60 mx-2 hover:text-white"/></a>
                <a href="https://github.com" aria-label="github"><FaGithub className="text-3xl transition-all duration-500 text-white/60 mx-2 hover:text-white"/></a>
                <a href="https://freelancer.com" aria-label="freelancer"><SiFreelancer className="text-3xl transition-all duration-500 text-white/60 mx-2 hover:text-white"/></a>
            </div>
            <hr className="w-full h-[2px] bg-white/50"/>
        </div>
        <div className="w-full flex justify-center items-center">
            <p className='text-lg text-white/80 text-center py-4'>&copy; 2025 | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
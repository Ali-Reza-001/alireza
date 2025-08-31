import { SiFreelancer } from "react-icons/si";
import BreadCrumb from "./assets/BreadCrumb";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="w-full min-h-screen pt-16 bg-black/80 text-white">
      <BreadCrumb title={'Contact'}/>
      <div className="lg:w-10/12 mx-auto w-full px-6 py-20 ">
        <div className="w-full p-4 flex gap-4 flex-wrap ">
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <div className="w-full bg-blue-500 rounded-[1.4rem] border-4 border-blue-700 p-1 flex flex-between items-center gap-4">
              <SiFreelancer className="p-2 bg-white text-6xl text-blue-500 rounded-[1.2rem] "/>
              <p className="text-2xl text-white">Hire me on Freelancer</p>
            </div>
            <div className="w-full bg-blue-600 rounded-[1.4rem] border-4 border-blue-800 p-1 mt-2 flex flex-between items-center gap-4">
              <FaFacebook className="p-2 bg-white text-6xl text-blue-600 rounded-[1.2rem]"/>
              <p className="text-2xl text-white">Follow me on Facebook</p>
            </div>
            <div className="w-full bg-blue-700 rounded-[1.4rem] border-4 border-blue-900 p-1 mt-2 flex flex-between items-center gap-4">
              <FaLinkedin className="p-2 bg-white text-6xl text-blue-700 rounded-[1.2rem]"/>
              <p className="text-2xl text-white">Join me on Linkedin</p>
            </div>
            <div className="w-full bg-green-600 rounded-[1.4rem] border-4 border-green-800 p-1 mt-2 flex flex-between items-center gap-4">
              <FaWhatsapp className="p-2 bg-white text-6xl text-green-600 rounded-[1.2rem]"/>
              <p className="text-[22px] text-white">Contact me on Whatsapp</p>
            </div>
            <div className="w-full bg-gray-600 rounded-[1.4rem] border-4 border-gray-800 p-1 mt-2 flex flex-between items-center gap-4">
              <FaGithub className="p-2 bg-white text-6xl text-gray-600 rounded-[1.2rem]"/>
              <p className="text-2xl text-white">My projects on Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
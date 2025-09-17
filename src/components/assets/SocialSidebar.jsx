import { useState } from "react";

import social from "../../data/social";

import { IoShareSocialOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { SiFreelancer } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import useScreenWidth from "../../hooks/useScreenWidth";


const SocialIcon = ({Data}) => {
    let {Icon, link, delay, aria} = Data;

    return (
        <div className="w-20 h-20 grid place-content-center socialMove translate-x-[100%]" style={{animationDelay: `${delay}`}}>
            <a aria-label={aria} href={link} className={` hover:text-white transition-all duration-300`}>
                <Icon/>
            </a>
        </div>
    )
}


const SocialSidebar = () => {

    const responsive = useScreenWidth();
    const { isMobile } = responsive;

    const [openSocial, setOpenSocial] = useState(false);

    const icons = [
        {Icon: SiFreelancer, aria: 'contact',link: social.freelancer, delay: '.2s'},
        {Icon: FaFacebook, aria: 'facebook',link: social.facebook, delay: '.4s'},
        {Icon: FaWhatsapp, aria: 'whatsapp',link: social.whatsapp, delay: '.6s'},
        {Icon: FaLinkedin, aria: 'linkedin',link: social.linkedin, delay: '.8s'},
        {Icon: FaGithub, aria: 'github',link: social.github, delay: '1s'},
    ]
    
    if (isMobile) {

        return (
            <div className='w-24 h-screen pointer-events-none fixed bottom-0 right-0 z-[200] text-[rgba(255,255,255,0.5)] text-4xl flex flex-col flex-wrap align-middle sm:justify-center justify-end'>
                <div className={`w-24 h-1rem text-[rgba(150,150,150,1)] text-4xl flex flex-col flex-wrap align-middle justify-end transition-all duration-500 pointer-events-auto`}>

                    {openSocial ? icons.map(icon => <SocialIcon Data={icon}  key={icon.link} />) : <div></div>}
                </div>
                <div className="w-16 h-16 pointer-events-auto grid place-content-center bg-gradient-to-br shadow-xl shadow-black/50 from-gray-800 to-gray-400 rounded-full mb-10 ml-2" onClick={() => setOpenSocial(prev => !prev)}>
                    {openSocial ? <div className="bg-white/50 w-14 h-14 grid place-content-center rounded-full text-black/70 shadow-inner"><IoClose/></div> : <IoShareSocialOutline/>}
                </div>
            </div>
        )
    } 
    
    
    return (
        <div className='w-20 h-screen absolute top-0 right-0 z-[10] text-[rgba(255,255,255,0.5)] text-4xl flex flex-col flex-wrap align-middle justify-center overflow-hidden'>
            {icons.map(icon => <SocialIcon Data={icon} key={icon.link} />)}
        </div>
    )
}

export default SocialSidebar
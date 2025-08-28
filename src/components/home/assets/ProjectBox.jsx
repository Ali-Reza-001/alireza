import { FaLink } from "react-icons/fa6";

import useScreenWidth from "../../../hooks/useScreenWidth";

const ProjectBox = ({data}) => {

    const { isMobile } = useScreenWidth();

    let linkNameCount = isMobile ? 20 : 30;

    const name = data.name;
    const des = data.des;
    const date = data.date;
    const img = data.img;
    const logo = data.logo;
    const link = data.link;
    const linkName = data.link.length <= linkNameCount ? data.link : data.link.slice(0, linkNameCount) + '...';
    const langs = data.langs;



  return (
    <div className="w-full h-full p-4 hover:scale-105 transition-all duration-500">
        <div className="w-full scale-[90%] rounded-2xl bg-white p-4 h-auto shadow-2xl">
            <div className="relative w-full aspect-video mb-4">
                <img src={img} alt="Project" className="z-0 rounded-2xl w-full absolute blur-[1rem] bg-cover" />
                <img src={img} alt="Project" className="z-10 rounded-2xl w-full absolute bg-cover"/>
            </div>
            <div className="w-full px-4 flex justify-between items-center">
                <img src={logo} alt="Project Logo" className="h-10" />
                <p className="w-auto text-black/80 text-lg">{date}</p>
            </div>
            <div className="w-full px-4 mt-4">
                <h2 className="text-2xl text-black">{name}</h2>
                <p className="w-full text-black/80 text-lg">{des}</p>
            </div>
            <div className="flex w-full justify-between flex-wrap mt-4 px-4">
                <div className="flex gap-1">
                    {langs.map((Lang, i) => <Lang className="text-2xl" key={i}/>)}
                </div>
                <a target="blank" href={link} className="underline flex items-center"><FaLink className="pt-1"/> {linkName}</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectBox
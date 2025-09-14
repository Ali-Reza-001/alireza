import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";


const Aside = () => {
  return (
    <div className="w-48 h-full fixed top-12 left-0 p-2 border-r border-black/30 shadow-[0_20px_30px_0_rgba(0,0,0,0.4),inset_10px_0_30px_10px_#fff]">
        <h1 className="flex gap-4 text-2xl items-center mb-6">
            <IoMenu className="text-3xl"/>
            Menu
        </h1>
        <Link to={'/admin/logs'} className="w-full mx-auto p-2 flex justify-start gap-4 items-center rounded-xl transition-all duration-300 hover:bg-black/10 cursor-pointer">
            <TbLogs className="text-2xl"/>
            <p>Logs</p>
        </Link>
    </div>
  )
}

export default Aside
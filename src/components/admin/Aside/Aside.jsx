import { Link, useLocation } from "react-router-dom";

import { TbLogs } from "react-icons/tb";
import { RiDashboard3Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import useScreenWidth from "../../../hooks/useScreenWidth";

const AsideItemsCon = ({data}) => {
  const location = useLocation();
  const {name, link, Icon} = data;
  let active = false;

  link === location.pathname ? active = true : active = false;

  return (
    <Link to={link} className={`w-full mx-auto mb-1 p-2 flex justify-start gap-4 items-center rounded-xl transition-all duration-300 hover:bg-black/10 cursor-pointer ${active ? 'activeItem' : ''}`}>
        <Icon className="text-2xl"/>
        <p>{name}</p>
    </Link>
  )
}


const Aside = () => {

  const asideItems = [
    {name: "Dashboard", link: "/admin", Icon: RiDashboard3Line},
    {name: "Logs", link: "/admin/logs", Icon: TbLogs},
    {name: "Users", link: "/admin/users", Icon: FaUsers},
    {name: "Official Email", link: "/admin/official-email", Icon: HiOutlineMailOpen},
  ]

  return (
    <div className="w-full h-[100vh] bg-white p-2 border-r border-black/30 shadow-[0_20px_30px_0_rgba(0,0,0,0.4),inset_10px_0_30px_20px_#fff]">
      <h1 className="flex gap-4 text-2xl items-center mb-6 p-2">
        Menu
      </h1>
      <div className="w-full">
        {asideItems.map((item, i) => <AsideItemsCon data={item} key={i} />)}
      </div>
    </div>
  )
}

export default Aside
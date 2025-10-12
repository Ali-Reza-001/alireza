import { Link, useLocation } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";
import { RiDashboard3Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

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
  ]

  return (
    <div className="w-48 h-full fixed top-12 left-0 p-2 border-r border-black/30 shadow-[0_20px_30px_0_rgba(0,0,0,0.4),inset_10px_0_30px_10px_#fff]">
        <h1 className="flex gap-4 text-2xl items-center mb-6">
            <IoMenu className="text-3xl"/>
            Menu
        </h1>
        <div className="w-full">
          {asideItems.map((item, i) => <AsideItemsCon data={item} key={i} />)}
        </div>
    </div>
  )
}

export default Aside
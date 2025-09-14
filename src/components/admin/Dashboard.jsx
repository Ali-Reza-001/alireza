import { FaBloggerB } from "react-icons/fa";
import { GoGoal } from "react-icons/go"
import { PiProjectorScreenChartFill } from "react-icons/pi";


const SkillBox = ({ data }) => {
  const { name, count, icon: Icon, color } = data;
  const colorMap = {
    red: 'from-red-400 to-red-800',
    gray: 'from-gray-400 to-gray-800',
    blue: 'from-blue-400 to-blue-800',
    pink: 'from-pink-400 to-pink-800',
    violet: 'from-violet-400 to-violet-800',
    green: 'from-green-400 to-green-800',
  };
  const gradient = colorMap[color] || 'from-gray-400 to-gray-800';

  return (
    <div className={`lg:w-1/5 w-full relative h-32 bg-gradient-to-br shadow-2xl shadow-black/60 overflow-hidden ${gradient} rounded-xl hover:scale-105 transition-all duration-300`}>
      <h2 className="text-3xl text-white p-4">{name}</h2>
      <Icon className="text-[10rem] text-white/40 p-4 absolute -bottom-8 -right-8" />
      <p className="text-4xl text-white p-4 absolute bottom-1 right-1 font-semibold">{count}</p>
    </div>
  );
};

const Dashboard = () => {

  const skills = [
    {
      name: 'Skills',
      color: 'red',
      count: '+9',
      icon: GoGoal
    },
    {
      name: 'Blogs',
      color: 'blue',
      count: '+6',
      icon: FaBloggerB 
    },
    {
      name: 'Blogs',
      color: 'violet',
      count: '+6',
      icon: FaBloggerB 
    },
    {
      name: 'Projects',
      color: 'gray',
      count: '+10',
      icon: PiProjectorScreenChartFill
    }
  ]

  return (
    <div className="w-full ">
      <div className="w-full p-8 flex justify-around">
        {skills.map((skill,i) => <SkillBox data={skill} key={i} />)}
      </div>
    </div>
  )
}

export default Dashboard
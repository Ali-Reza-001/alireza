
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumb = ({title}) => {
  return (
    <div className="lg:w-10/12 w-full mx-auto mt-0  lg:mt-20 lg:border-0 border-b-2 border-white/60">
        <div className="bread-crumb bg-[url(/bread-crumb.jpg)] bg-cover w-full h-auto lg:rounded-[2rem] shadow-2xl shadow-black/95">
            <h1 className='pt-36 pb-2 text-4xl font-bold text-center w-full bg-black/20 lg:rounded-[2rem]'>{title}</h1>
            <h3 className='pb-36 pt-2 text-xl font-medium text-center w-full bg-black/20 lg:rounded-[2rem] flex items-center justify-center'><Link to={'/'} className="underline">Home</Link> <IoIosArrowForward/> {` ${title}`}</h3>
        </div>
    </div>
  )
}

export default BreadCrumb
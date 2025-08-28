import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogBox = ({data}) => {

    const sub = data.sub;
    const des = data.des;
    const date = data.date;
    const img = data.img;
    const category = data.category;
    const author = data.author;
    const authorImg = data.authorImg;



  return (
    <div className="w-full h-full p-4 transition-all duration-500 scale-110 hover:scale-125 sm:scale-100 sm:hover:scale-105">
        <div className="w-full scale-[90%] rounded-2xl p-4 h-auto bg-white/5 shadow-sm shadow-white/20">
            <div className={` w-full aspect-video mb-4 bg-cover rounded-xl  shadow-sm shadow-white/20`} style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="w-full px-4 flex justify-between items-center">
                <p className="text-lg text-black/70 font-bold bg-white rounded-full px-2">{category}</p>
                <div className="w-auto flex justify-center gap-2">
                    {authorImg ? <div className="w-7 h-7 bg-center bg-cover rounded-full" style={{backgroundImage: `url(${authorImg})`}}></div> : <div className="w-7 h-7 grid place-content-center bg-pink-600 font-bold text-white rounded-full">{author.slice(0,1)}</div>}
                    <p className="w-auto text-white/80 text-lg">{author}</p>
                </div>
            </div>
            <div className="w-full px-4 mt-4">
                <h2 className="text-2xl text-white">{sub}</h2>
                <p className="w-full text-white/80 text-lg">{des}</p>
            </div>
            <div className="flex w-full justify-between flex-wrap items-center mt-4 px-4">
                <p className="w-auto text-white/80 text-lg">{date}</p>
                <Link to={'/post:id'} className="px-5 py-2 bg-white/95 rounded-full">
                    <FaArrowRightLong className="text-black/70 text-2xl"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogBox
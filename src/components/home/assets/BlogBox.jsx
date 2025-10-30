import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import axiosPublic from "../../../api/utils/axiosPublic";
import { useEffect, useState } from "react";

const BlogBox = ({ data }) => {
    const { title, content, createdAt: date, imageUrl, category, authorID } = data;

    const [author, setAuthor] = useState(authorID);
    const [authorImg, setAuthorImg] = useState(null);

    const dateObj = new Date(date);
    const year = dateObj.getUTCFullYear();      
    const month = dateObj.getUTCMonth() + 1;   
    const day = dateObj.getUTCDate();       

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const res = await axiosPublic.get(`/blog-user-data/${authorID}`);
        console.log('Author data fetched : ', res.data);
        setAuthor(res.data.username);
        setAuthorImg(res.data.userProfilePic);
      } catch (err) {
        console.error('Failed to fetch author data : ', err);
      }
    };
    if (authorID) fetchAuthorData();
  }, [authorID]);



  return (
    <div className="w-full h-full p-4 transition-all duration-500 scale-110 hover:scale-125 sm:scale-100 sm:hover:scale-105">
        <div className="w-full scale-[90%] rounded-2xl p-4 h-auto bg-white/5 shadow-sm shadow-white/20">
            <div className={` w-full aspect-video mb-4 bg-cover rounded-xl  shadow-sm shadow-white/20`} style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="w-full px-4 flex justify-between items-center">
                <div className="w-auto flex justify-center gap-2">
                    {authorImg ? <div className="w-8 h-8 bg-center bg-cover rounded-full" style={{backgroundImage: `url(${authorImg})`}}></div> : <div className="w-8 h-8 grid place-content-center bg-pink-600 font-bold text-white rounded-full">{author.slice(0,1)}</div>}
                    <p className="w-auto text-white/80 text-lg">{author}</p>
                </div>
                <p className="text-lg text-black/70 font-bold bg-white rounded-full px-2">{category}</p>
            </div>
            <div className="w-full px-4 mt-4">
                <h2 className="text-2xl text-white">{title}</h2>
                <p className="w-full text-white/80 text-lg">
                    {content.length <= 80 ? content : content.slice(0, 80) + '...'}
                </p>
            </div>
            <div className="flex w-full justify-between flex-wrap items-center mt-4 px-4">
                <p className="w-auto text-white/80 text-lg">{`${year}/${month}/${day}`}</p>
                <Link to={`/blogs`} className="px-5 py-2 bg-white/95 rounded-full">
                    <FaArrowRightLong className="text-black/70 text-2xl"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogBox
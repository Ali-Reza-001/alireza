
import defaultBlogs from "../../data/blogs";

import BlogBox from "./assets/BlogBox";
import Slider from "react-slick";

import useScreenWidth from "../../hooks/useScreenWidth";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosPublic from "../../api/utils/axiosPublic";

const MyBlogs = () => {

    const [blogs, setblogs] = useState(defaultBlogs);

    const {isMobile, isTablet} = useScreenWidth();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axiosPublic.get('/api/blogsControl');
                console.log('Blogs fetched : ', res.data);
                setblogs(res.data);
            } catch (err) {
                setblogs(blogs);
                console.error('Failed to fetch blogs : ', err);
            }
        }
        // fetchBlogs();
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };


  return (
    <section className="w-full py-8 bg-black/80" id="blogsSec">
        <div className="container mx-auto">
            <h1 className="text-3xl text-center text-white py-8">Blogs</h1>
            <p className="text-white/80 w-11/12 lg:w-2/3 mx-auto text-xl text-center pb-8">
                Insights, lessons, and stories from my journey as a developer — and from my friends. These posts reflect growth, challenges, and tips for fellow creators.
            </p>
        </div>
        <div className="w-full p-4 gap-4 overflow-visible">
            <Slider {...settings} className="scale-100">
                {blogs.map((blog, i) => <BlogBox data={blog} key={i} />)}
            </Slider>
            <Link to={'/upload-blog'} className="w-72 px-8 py-3 bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white text-xl lg:ml-8 mx-auto lg:mx-0 lg:mr-8 rounded-2xl lg:mt-8 mt-12 mb-12 flex items-center gap-2 hover:underline">Write your own blog <CiEdit className="text-2xl" /></Link>
        </div>
    </section>
  )
}

export default MyBlogs
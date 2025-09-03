
import blogs from "../../data/blogs";

import BlogBox from "./assets/BlogBox";
import Slider from "react-slick";

import useScreenWidth from "../../hooks/useScreenWidth";

const MyBlogs = () => {

    const {isMobile, isTablet} = useScreenWidth();

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
                Insights, lessons, and stories from my journey as a developer. These posts reflect my growth, challenges, and tips for fellow creators.
            </p>
        </div>
        <div className="w-full p-4 gap-4 overflow-visible">
            <Slider {...settings} className="scale-100">
                {blogs.map((blog, i) => <BlogBox data={blog} key={i} />)}
            </Slider>
        </div>
    </section>
  )
}

export default MyBlogs
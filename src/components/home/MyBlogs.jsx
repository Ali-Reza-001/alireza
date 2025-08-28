import { FaCss3, FaElementor, FaHtml5, FaJs, FaMailchimp, FaWordpress } from "react-icons/fa6";

import BlogBox from "./assets/BlogBox";
import Slider from "react-slick";

import useScreenWidth from "../../hooks/useScreenWidth";

const MyBlogs = () => {

    const {isMobile, isTablet, isPC} = useScreenWidth();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const blogs = [
        {
            id: 101,
            sub: 'Freelancing vs Stability',
            des: 'Exploring the highs and lows of freelancing—from creative freedom to financial unpredictability. Is it worth the risk?',
            date: '2024 / 08 / 02',
            img: 'Blogs/freelancing.jpg',
            category: 'Career',
            author: 'Alireza'
        },
        {
            id: 102,
            sub: 'Full-Time Fatigue',
            des: 'Why full-time roles can feel draining—and how to stay motivated when routine sets in. A reflection from my early dev days.',
            date: '2024 / 08 / 10',
            img: 'Blogs/full-time.jpg',
            category: 'Career',
            author: 'Fahim'
        },
        {
            id: 103,
            sub: 'AI in Web Design',
            des: 'How AI tools are reshaping the way we design and develop websites. My take on balancing automation with creativity.',
            date: '2024 / 09 / 15',
            img: 'Blogs/AI.jpg',
            category: 'Tech Trends',
            author: 'Jawad'
        },
        {
            id: 104,
            sub: 'Tailwind vs Traditional CSS',
            des: 'A breakdown of utility-first vs semantic styling. When to use Tailwind, and when to stick with classic CSS.',
            date: '2024 / 10 / 01',
            img: 'Blogs/2149901789.jpg',
            category: 'Development',
            author: 'Alireza'
        },
        {
            id: 105,
            sub: 'WordPress Customization Guide',
            des: 'Tips and tricks for customizing WordPress themes and plugins without breaking the site. A must-read for freelancers.',
            date: '2024 / 10 / 10',
            img: 'Blogs/12212574_4880390.jpg',
            category: 'Tutorials',
            author: 'Sohrab'
        },
        {
            id: 106,
            sub: 'Designing for Impact',
            des: 'Beyond aesthetics—how intentional design choices can elevate user experience and drive engagement. My approach to meaningful UI.',
            date: '2024 / 11 / 05',
            img: 'Blogs/2149208567.jpg',
            category: 'Design',
            author: 'Alireza'
        }
    ]


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
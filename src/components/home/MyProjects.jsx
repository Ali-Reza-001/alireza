
import projects from "../../data/projects";

import ProjectBox from "./assets/ProjectBox";
import Slider from "react-slick";

import useScreenWidth from "../../hooks/useScreenWidth";

const MyProjects = () => {

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


  return (
    <section className="w-full py-10" id="projectsSec">
        <div className="container mx-auto">
            <h1 className="text-3xl text-center py-8">Portfolio</h1>
            <p className="text-black/80 w-11/12 lg:w-2/3 mx-auto text-xl text-center pb-8">
                Here are some of the websites I've built—from personal experiments to professional client work. Each project reflects my growth as a developer and my commitment to clean, functional design.
            </p>
        </div>
        <div className="w-full p-4 gap-4 overflow-visible">
            <Slider {...settings} className="scale-100">
                {projects.map((project, i) => <ProjectBox data={project} key={i} />)}
            </Slider>
        </div>
    </section>
  )
}

export default MyProjects
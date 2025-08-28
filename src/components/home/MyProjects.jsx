import { FaCss3, FaElementor, FaHtml5, FaJs, FaMailchimp, FaWordpress } from "react-icons/fa6";

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

    const projects = [
        {
            name: 'Sellbox',
            des: 'Developed the official website for Sellbox, a data-driven platform focused on digital asset management. Built with WordPress and integrated Mailchimp for lead capture.',
            date: '2024 / 8 / 02',
            img: 'Projects/sellbox.png',
            logo: "Projects/Logos/sellbox.png",
            link: 'https://sellbox.co',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'AR-WebDev',
            des: 'My personal portfolio site built using pure HTML, CSS, and JavaScript. Showcases front-end fundamentals and responsive design techniques.',
            date: '2024 / 4 / 02',
            img: 'Projects/ar.png',
            logo: "Projects/Logos/ar.png",
            link: 'https://ar-webdev.w3spaces.com',
            langs: [FaHtml5, FaCss3, FaJs],
        },
        {
            name: 'Crowds-Cargo',
            des: 'Designed and deployed the website for Crowds-Cargo, a logistics startup under Crowds Group. Focused on clean UI and service clarity.',
            date: '2025 / 6 / 15',
            img: 'Projects/crowds-cargo.png',
            logo: "Projects/Logos/crowds-cargo.png",
            link: 'https://crowds-group.com',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'Bamiyan-Bollyfood',
            des: 'Built the official site for Bamiyan-Bollyfood, a multicultural catering service in Germany. Emphasized bilingual content and brand storytelling.',
            date: '2025 / 6 / 05',
            img: 'Projects/bamiyan-bollyfood.png',
            logo: "Projects/Logos/bamiyan-bollyfood.png",
            link: 'https://cateringservice.bamiyan-bollyfood.de',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'Afghan Global',
            des: 'Created the digital presence for Afghan Global, a certified provider of security camera systems. Focused on product clarity and trust-building.',
            date: '2025 / 6 / 29',
            img: 'Projects/afghan-global.png',
            logo: "Projects/Logos/afghan-global.png",
            link: 'https://afghanglobalnet.com',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'Afghanistan Engineers',
            des: 'Developed the official site for AEC, a council supporting Afghan engineers. Highlighted their mission, events, and membership outreach.',
            date: '2025 / 7 / 07',
            img: 'Projects/aec.png',
            logo: "Projects/Logos/aec.png",
            link: 'https://afghanistanengineers.org',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'Datacore',
            des: 'Built the website for Datacore Group, a tech contracting firm. Focused on service presentation, contact funnels, and brand identity.',
            date: '2025 / 8 / 03',
            img: 'Projects/datacore.png',
            logo: "Projects/Logos/datacore.png",
            link: 'https://datacore-group.com',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
        {
            name: 'AHAC',
            des: 'Designed the official site for Afghanistan Health Assessment Center. Prioritized accessibility, service clarity, and institutional trust.',
            date: '2025 / 8 / 21',
            img: 'Projects/ahac.png',
            logo: "Projects/Logos/ahac.png",
            link: 'https://ahac.me',
            langs: [FaWordpress, FaElementor, FaMailchimp],
        },
    ]


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
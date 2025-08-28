import HeroSection from "./home/HeroSection";
import AboutMe from "./home/AboutMe";
import MySkills from "./home/MySkills";
import MyProjects from "./home/MyProjects";
import MyBlogs from "./home/MyBlogs";

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutMe/>
        <MySkills/>
        <MyProjects/>
        <MyBlogs/>
    </div>
  )
}

export default Home;
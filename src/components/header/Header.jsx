import useScreenWidth from "../../hooks/useScreenWidth";
import { Link, useLocation } from "react-router-dom";
import { CgClose, CgMenuRight } from "react-icons/cg";

const Header = ({open, setOpen}) => {
  

  const { isMobile } = useScreenWidth();
  const location = useLocation();
  const currentPath = location.pathname;

 const Menu = () => {
  return (
    <div className="h-16 flex justify-center items-center gap-4 px-4 overflow-hidden">
      <Link to={'/'} className={`w-28 h-16 grid place-content-center text-xl text-white text-center transition-all duration-300 underLine ${currentPath === '/' && 'underLineW'}`}>Home</Link>
      <Link to={'/about'} className={`w-28 h-16 grid place-content-center text-xl text-white text-center transition-all duration-300 underLine ${currentPath === '/about' && 'underLineW'}`}>About Me</Link>
      <Link to={'/skills'} className={`w-28 h-16 grid place-content-center text-xl text-white text-center transition-all duration-300 underLine ${currentPath === '/skills' && 'underLineW'}`}>Skills</Link>
      <Link to={'/projects'} className={`w-28 h-16 grid place-content-center text-xl text-white text-center transition-all duration-300 underLine ${currentPath === '/projects' && 'underLineW'}`}>Projects</Link>
      <Link to={'/blog'} className={`w-28 h-16 grid place-content-center text-xl text-white text-center transition-all duration-300 underLine ${currentPath === '/blog' && 'underLineW'}`}>Blog</Link>
    </div>
  )
 }

  return (
    <div className='md:w-[80%] w-full h-16 md:mt-6 absolute left-0 right-0 mx-auto md:rounded-2xl bg-white/20 backdrop-blur-md md:border border-b border-white/50 flex justify-between items-center z-[300]'>
      <div className='w-16 h-16 ml-4'>
        <img src="/logo.png" alt="" />
      </div>
      <div>
        {!isMobile ? <Menu/> : open ? <CgClose className='w-10 h-10 mr-4 text-white' onClick={() => setOpen(prev => !prev)}/> : <CgMenuRight className='w-10 h-10 mr-4 text-white' onClick={() => setOpen(prev => !prev)}/> }
      </div>
    </div>
  )
}

export default Header
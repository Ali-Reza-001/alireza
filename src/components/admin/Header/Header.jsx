import { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import Notification from "../../assets/Notification";
import { FaBell } from "react-icons/fa";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { IoClose, IoMenu } from "react-icons/io5";


const Header = ({setIsMenuOpen, isMenuOpen}) => {

  const {isMobile, isPC} = useScreenWidth()

  const [isOpenNote, setIsOpenNote] = useState(false);
  const [isNotify, setIsNotify] = useState(true);

  useEffect(() => {setIsNotify(true)}, [isOpenNote]);

  return (
    <div className="w-full h-12 border-b border-black/30 shadow-xl flex justify-between">
        <Notification isOpenNote={isOpenNote} setIsOpenNote={setIsOpenNote} />
        <div className="p-1">
            <img src="/favicon.png" alt="logo" className="h-full" />
        </div>
        {
          isMobile ?
            (<div className="p-4 flex gap-4 items-center ">
              <button className={`p-1 rounded-xl hover:bg-black/10 transition-all duration-200 cursor-pointer `} title="setting" onClick={() => setIsMenuOpen(prev => !prev)}>
                {
                  isMenuOpen ?
                    <IoClose className="text-3xl" /> :
                  < IoMenu className="text-3xl"/>
                }
              </button>
            </div>) :
          (
          <div className="p-4 flex gap-4 items-center ">
            <button className={`p-2 rounded-xl hover:bg-black/10 transition-all duration-200 cursor-pointer `} title="setting">
              <FaBell className={`text-xl ${isNotify ? 'notify' : ''}`}  onClick={() => setIsOpenNote(prev => !prev)}/>
            </button>
            <button className="p-2 rounded-xl hover:bg-black/10 transition-all duration-200 cursor-pointer" title="setting">
              <IoMdSettings className="text-2xl"/>
            </button>
          </div>
          )
        }
        
    </div>
  )
}

export default Header
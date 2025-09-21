import { useState, useEffect } from "react";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import Notification from "../../assets/Notification";


const Header = () => {

  const [isOpenNote, setIsOpenNote] = useState(false);
  const [isNotify, setIsNotify] = useState(true);

  useEffect(() => {setIsNotify(true)}, [isOpenNote]);

  return (
    <div className="w-full h-12 border-b border-black/30 shadow-xl flex justify-between">
        <Notification isOpenNote={isOpenNote} setIsOpenNote={setIsOpenNote} />
        <div className="p-1">
            <img src="/favicon.png" alt="logo" className="h-full" />
        </div>
        <div className="p-4 flex gap-4 items-center ">
            <button className={`p-2 rounded-xl hover:bg-black/10 transition-all duration-200 cursor-pointer `} title="setting">
              <IoIosNotifications className={`text-2xl ${isNotify ? 'notify' : ''}`}  onClick={() => setIsOpenNote(prev => !prev)}/>
            </button>
            <button className="p-2 rounded-xl hover:bg-black/10 transition-all duration-200 cursor-pointer" title="setting">
              <IoMdSettings className="text-2xl"/>
            </button>
        </div>
    </div>
  )
}

export default Header
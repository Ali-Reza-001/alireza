import { IoMdSettings } from "react-icons/io"


const Header = () => {
  return (
    <div className="w-full h-12 border-b border-black/30 shadow-xl flex justify-between">
        <div className="p-1">
            <img src="/favicon.png" alt="logo" className="h-full" />
        </div>
        <div className="p-4 flex gap-4 items-center ">
            <div className="p-2 rounded-xl hover:bg-black/10 transition-all duration-200" title="setting">
                <IoMdSettings className="text-2xl"/>
            </div>
        </div>
    </div>
  )
}

export default Header
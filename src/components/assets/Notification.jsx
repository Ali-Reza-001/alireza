import { FaTimes, FaRegCheckCircle  } from "react-icons/fa";


const Notification = ({isOpenNote, setIsOpenNote}) => {

  return (
    <div className={`w-[80%] lg:w-[300px] transition-all duration-500 rounded-b-2xl shadow-2xl shadow-black/60 bg-white absolute right-[6%] px-2 z-40 ${isOpenNote ? 'top-12' : '-top-[120%]'}`}>
      <div className="w-full p-1 flex items-center justify-between">
        <h2 className="text-black text-xl">Notification</h2>
        <FaTimes className="text-2xl font-thin text-black cursor-pointer" onClick={() => setIsOpenNote(false)} />
      </div>
      <hr className="w-[92%] mx-auto border-black/60 my-2"/>
      <div className="w-full p-2">
        <div className="w-full h-12 bg-green-300 border-green-600 rounded-md border-l-4 flex items-center justify-start gap-2 text-green-600">
            <FaRegCheckCircle className="text-2xl ml-2"/>
            <p className="">User deleted successfully</p>
        </div>
      </div>
    </div>
  )
}

export default Notification;
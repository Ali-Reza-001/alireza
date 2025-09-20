import {useState} from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({title='Delete the user ?', content='This action can not be undone !', actionName='Delete'}) => {

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className={`w-[100vw] h-screen bg-black/30 backdrop-blur-md fixed z-[500] grid place-content-center ${!modalOpen && 'hidden'}`}>
      <div className='lg:w-[450px] w-[84%] rounded-2xl pointer-events-auto bg-white'>
        <div className='w-full p-2'>
          <div className='w-full flex items-center justify-between px-4 py-2 '>
            <h1 className='text-xl font-bold '>{title}</h1>
            <FaTimes className='text-2xl font-thin cursor-pointer' onClick={() => setModalOpen(prev = !prev)}/>
          </div>
          <hr className="w-[90%] mx-auto border-black/60 h-[1px] my-2" />
          <p className='w-full min-h-14 px-6 pt-2 pb-4 text-black/80'>{content}</p>
          <hr className="w-[90%] mx-auto border-black/60 h-[1px] my-2" />
          <div className='w-full flex justify-end gap-4 px-4 py-1 items-center'>
            <button className="cursor-pointer px-4 py-2 rounded-2xl bg-black/20 text-black" onClick={() => setModalOpen(prev = !prev)}>Cancel</button>
            <button className="cursor-pointer px-4 py-2 rounded-2xl bg-red-500 text-white">{actionName}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
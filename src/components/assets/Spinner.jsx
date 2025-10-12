
const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] min-h-screen backdrop-blur-md flex justify-center items-center z-[9999]">
        <div className='w-64 rounded-[2rem] bg-black/40 p-8'>
        <div className="w-full">
            <div className="spinner"></div>
            <p className='text-xl text-white text-center mt-8'>Please Wait</p>
        </div>
        </div>
    </div>
  )
}

export default Spinner;
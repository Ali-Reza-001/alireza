import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <section className='w-full h-full bg-[radial-gradient(#555,#333)] flex flex-col flex-wrap overflow-hidden'>
        <div className="container mx-auto mt-40 mb-24">
            <h1 className='text-white text-3xl text-center font-bold'>404</h1>
            <h3 className='text-white/80 text-xl text-center'>Page Not Found</h3>
            <DotLottieReact
            src="https://lottie.host/ea9c4229-b7af-49f0-bf6a-283c3b0c093b/lXZFjL2Cwj.lottie"
            loop
            autoplay
            className='max-w-96 text-center mx-auto py-10'
            />
            <p className='w-4/5 mx-auto text-white/80 text-xl text-center'>
                Sorry, the page that you are looking for is not available !
            </p>
            <Link to={'/'} className=' w-56 my-8 text-center mx-auto text-xl text-white border-2 border-white rounded-2xl py-2 px-4 hover:text-black/80 hover:bg-white flex items-center justify-between'>Back To Home <FaHome className=''/> </Link>
        </div>
    </section>
  )
}

export default NotFound
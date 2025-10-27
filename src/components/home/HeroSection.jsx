
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';
import LightRays from '../assets/LightRays';
import TextType from '../assets/TextType';

import useScreenWidth from '../../hooks/useScreenWidth';

const HeroSection = () => {

    const {isMobile} = useScreenWidth();

    const nickNames = ['Front-end Developer', 'Back-end Developer', 'MERN Stack Developer', 'Website Designer'];
    const [nickName, setNickName] = useState('Software Engineer');
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          const next = (prev + 1) % nickNames.length;
          setNickName(nickNames[next]);
          return next;
        });
      }, 6000);

      return () => clearInterval(interval);
    }, []);

  return (
    <section className="w-full bg-[#333] bg-[url('/heroBGV.webp')] bg-cover lg:bg-[url('/heroBG.webp')] bg-no-repeat bg-cover">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <div className='w-full h-full bg-black/10 backdrop-blur-sm'>
            <div className="w-full h-screen lg:flex pt-40 text-center lg:text-left absolute top-0 left-0">
                <div className="text-white  lg:w-1/2 w-full flex justify-center flex-col lg:pl-28">
                    <p className='text-3xl text-white '> Hello, I am Alireza. <br/> And I am a ...</p>
                    <h1 className="sm:text-4xl text-3xl mt-4 text-center lg:text-left"> 
                      <TextType 
                          text={nickNames}
                          typingSpeed={30}
                          pauseDuration={1500}
                          showCursor={true}
                          cursorCharacter="|"
                        />
                    </h1>
                </div>
                <div className="lg:w-1/2 flex w-full lg:mt-2rem lg:mx-auto sm:mt-0 mt-28 sm:scale-100 scale-150 relative">
                    <img src="/coffee.png" alt="coffee" className='absolute lg:w-52 w-24 aspect-square top-1/3 lg:left-0 left-1/4 rotate-12 transition duration-500 animUD-1' />
                    <img src="/laptop.png" alt="laptop" className=' transition duration-500 -scale-x-100 animUD-2 absolute left-1/4 top-0 lg:w-96 w-52 aspect-square' />
                </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -ml-6 mt-10 animate-bounce text-white text-5xl">
          ↓
        </div>
    </section>
  )
}

export default HeroSection
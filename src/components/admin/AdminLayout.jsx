import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './Header/Header';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';

import useScreenWidth from '../../hooks/useScreenWidth';

const Layout = () => {

    const { isMobile } = useScreenWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='lg:w-full w-[1400px] overflow-hidden h-screen bg-white text-black'>
            <header className='w-[100vw] z-[9999] font-en'>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </header>
            <div className="w-full flex">
                <aside 
                    className={
                        !isMobile ? 
                            "w-52 font-en" :
                        `w-52 font-en h-[100vh] fixed top-12 z-10 transition-all duration-500 ${isMenuOpen ? 'left-0' : '-left-full'}`
                    }
                >
                    <Aside isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </aside>
                <main className="w-full max-h-[calc(100vh - 4rem)] overflow-hidden font-en">
                    <Outlet/>
                </main>
            </div>
            <footer className='font-en w-full'>
                {/* <Footer/> */}
            </footer>
        </div>
    )
}

export default Layout
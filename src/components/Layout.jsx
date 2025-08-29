import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Cursor from './assets/Cursor';
import SocialSidebar from './assets/SocialSidebar';

import Header from './header/Header';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';

import useScreenWidth from '../hooks/useScreenWidth';

const Layout = () => {
    const [open, setOpen] = useState(false);

    const resposive = useScreenWidth();
    const {isMobile, isTablet ,isPC} = resposive;

    useEffect(() => {
        open ? document.documentElement.style.overflow = 'hidden' : document.documentElement.style.overflow = 'auto';
    },[open])

    return (
        <>
            <header className='fixed top-0 w-full z-[9999] font-en'>
                <Header open={open} setOpen={setOpen} />
            </header>
            <aside className="w-full font-en">
                <Aside open={open} setOpen={setOpen} />
            </aside>
            <main className="w-full font-en">
                
                <Outlet/>
                <SocialSidebar/>
            </main>
            <footer className='font-en w-full'>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout
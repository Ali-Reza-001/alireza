import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SocialSidebar from './assets/SocialSidebar';
import Modal from './assets/Modal';

import Header from './header/Header';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';


const Layout = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        open ? document.documentElement.style.overflow = 'hidden' : document.documentElement.style.overflow = 'auto';
    },[open])


    return (
        <>
            <Modal></Modal>
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
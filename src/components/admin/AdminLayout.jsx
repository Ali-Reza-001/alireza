import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './Header/Header';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';

import useScreenWidth from '../../hooks/useScreenWidth';

const Layout = () => {

    const [open, setOpen] = useState(null);

    return (
        <div className='lg:w-full w-[1400px] overflow-auto h-screen bg-white text-black'>
            <header className='w-full z-[9999] font-en'>
                <Header open={open} setOpen={setOpen} />
            </header>
            <aside className="w-full font-en">
                <Aside open={open} setOpen={setOpen} />
            </aside>
            <main className="w-[calc(100%-12rem)] h-[calc(100vh-8rem)] absolute right-0 top-16 overflow-hidden font-en">
                <Outlet/>
            </main>
            <footer className='font-en w-full'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout
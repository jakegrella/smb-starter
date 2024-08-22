'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import MainNavigation from './MainNavigation';
import Button from './Button';
import { companyInfo } from '../companyInfo';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // close menu when screen is resized
    useEffect(() => {
        const handleResize = () => { setMenuOpen(false) };

        window.addEventListener('resize', handleResize);

        // cleanup event listener on component unmount
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);

    function HamburgerMenu() {
        return (
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div
                    className={`w-8 h-[2px] bg-dark my-2 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
                />
                <div
                    className={`w-8 h-[2px] bg-dark my-2 transform transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
                />
            </div>
        );
    }

    return (
        <header className="flex justify-between items-center p-4">
            <Logo linkToHome />
            <div className='flex flex-row-reverse gap-4 items-center md:flex-row'>
                <HamburgerMenu />
                <div
                    className={menuOpen
                        ? "absolute top-0 right-0 z-10 w-full h-[calc(100%-64px)] mt-16 pr-4 bg-light flex justify-end"
                        : "hidden md:flex"}
                >
                    <MainNavigation />
                </div>
                <Button externalLink={{ href: 'tel:+1234567890' }}>{companyInfo.contact.phone}</Button>
            </div>
        </header>
    );
}

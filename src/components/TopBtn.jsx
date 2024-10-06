import React, { useEffect, useState } from 'react';
import topButtonImage from '../assets/img/topBtn.png';

const TopBtn = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            id="topBtn"
            className={`fixed bottom-4 right-4 z-50 p-0 bg-transparent border-none shadow-none hover:opacity-80 focus:outline-none 
                        transition-all duration-300 ease-in-out 
                        ${visible ? 'opacity-100 transform translate-y-0' : 'opacity-0 -translate-y-6'}`}
            onClick={scrollToTop}
            style={{ display: visible ? 'block' : 'none' }} // Pastikan tombol tidak tampil di DOM sebelum digulir
        >
            <img src={topButtonImage} alt="Scroll to Top" className="w-12 h-12" />
        </button>
    );
};

export default TopBtn;

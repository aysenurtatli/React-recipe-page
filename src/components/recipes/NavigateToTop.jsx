import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function NavigateToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setVisible(true);
            } else {
                setVisible(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        visible && (
            <button className='fixed bottom-6 right-6 rounded-full shadow-lg bg-orange-500 size-16 text-white flex items-center justify-center' onClick={scrollToTop}><IoIosArrowUp size={30} /></button>
        )
    )
}

export default NavigateToTop
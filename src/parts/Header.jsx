import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../assets/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const navbarStyle = {
        backgroundColor: 'rgb(246, 182, 119)',
        mask: 'radial-gradient(42.49px at 50% calc(100% - 57px), #000 99%, #0000 101%) calc(50% - 76px) 0/152px 100%, radial-gradient(42.49px at 50% calc(100% + 19px), #0000 99%, #000 101%) 50% calc(100% - 38px)/152px 100% repeat-x',
        WebkitMask: 'radial-gradient(42.49px at 50% calc(100% - 57px), #000 99%, #0000 101%) calc(50% - 76px) 0/152px 100%, radial-gradient(42.49px at 50% calc(100% + 19px), #0000 99%, #000 101%) 50% calc(100% - 38px)/152px 100% repeat-x',
        height: isMenuOpen ? '300px' : '150px'
    };

    return (
        <div className='z-0' style={navbarStyle}>
            <nav className='flex flex-wrap max-w-screen-2xl items-center justify-between p-8 mx-auto z-10'>
                <Link to="/" className='text-prairie-sand-700 text-3xl font-bold'>Tasty</Link>
                <button
                    onClick={toggleMenu}
                    type='button'
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden'
                    aria-expanded={isMenuOpen}>
                    <span className='sr-only'>Open Main Menu</span>
                    <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? `block my-4 ` : 'hidden'} w-full md:block md:w-auto z-10`}>
                    <ul className='font-bold text-xl text-prairie-sand-900 flex flex-col gap-3 md:gap-0 p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/addRecipe">Add Recipe</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;

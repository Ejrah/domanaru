import React from 'react';
import logo from '../assets/img/icon.png';

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-palette-redbase shadow-lg">
            <nav className="flex container mx-auto items-center p-2">
                <div>
                    <a href="/">
                        <img className="w-12 h-12 rounded-full overflow-hidden" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="ml-auto text-palette-add001 font-bold">
                    <ul className="flex gap-6">
                        <li className="group">
                            <a className="relative block pb-1 hover:text-palette-darker transition-colors duration-300" href="/">
                                Home
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-palette-darkest scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:h-[2px]"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a className="relative block pb-1 hover:text-palette-darker transition-colors duration-300" href="/blog">
                                Blog
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-palette-darkest scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:h-[2px]"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a className="relative block pb-1 hover:text-palette-darker transition-colors duration-300" href="/post">
                                Post
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-palette-darkest scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:h-[2px]"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a className="relative block pb-1 hover:text-palette-darker transition-colors duration-300" href="/about">
                                About
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-palette-darkest scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:h-[2px]"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

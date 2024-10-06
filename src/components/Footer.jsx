function Footer() {
    return (
        <footer className="bg-palette-redbase p-6 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between space-x-6">
                    {/* Bagian Navigation */}
                    <div className="flex-1">
                        <h5 className="text-md text-xl font-bold mb-2 text-left">Navigation</h5>
                        <ul className="list-unstyled text-left text-sm">
                            <li className="mb-1">
                                <a href="/" className="flex items-center text-white hover:bg-palette-reddarker p-1 transition duration-300 ease-in-out">
                                    <i className="fas fa-home mr-1"></i> Home
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="/posts" className="flex items-center text-white hover:bg-palette-reddarker p-1 transition duration-300 ease-in-out">
                                    <i className="fas fa-blog mr-1"></i> Post
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="/blog" className="flex items-center text-white hover:bg-palette-reddarker p-1 transition duration-300 ease-in-out">
                                    <i className="fas fa-user mr-1"></i> Blog
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="flex items-center text-white hover:bg-palette-reddarker p-1 transition duration-300 ease-in-out">
                                    <i className="fas fa-envelope mr-1"></i> About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Bagian Contact */}
                    <div className="flex-1">
                        <h5 className="text-md text-xl font-bold mb-2 text-left">Contact</h5>
                        <ul className="list-unstyled text-left text-sm">
                            <li className="flex items-center mb-1">
                                <i className="fas fa-map-marker-alt mr-1"></i> Indonesia
                            </li>
                            <li className="flex items-center mb-1">
                                <i className="fas fa-phone mr-1"></i> (420) 911-6969
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-1"></i> contoh@email.com
                            </li>
                        </ul>
                    </div>

                    {/* Bagian Social */}
                    <div className="flex-1">
                        <h5 className="text-md text-xl font-bold mb-2 text-left">Social</h5>
                        <div className="flex space-x-2">
                            <a href="https://instagram.com/username" className="text-white hover:bg-palette-reddarker p-1 transition duration-300 ease-in-out">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 text-xs">
                    <p>&copy; Made with luv by Maheswara Damar</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;

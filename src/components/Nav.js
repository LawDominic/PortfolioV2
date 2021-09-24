import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav() {
    const [hide, setHide] = useState(false)
    return (
        <div>
            <div class="container mt-2 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between items-center">
                        {/* Mobile menu button */}
                        <div class="flex md:hidden">
                            <button onClick={() => {setHide(!hide)}} type="button" class="mt-2 ml-2 text-gray-100 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div class="mx-4 md:flex md:items-center mt-8" className={hide && window.screen.width > 767 ? 'hidden' : undefined}>
                        <HashLink smooth to="/" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-green-400">
                            Home
                        </HashLink>
                        <HashLink smooth to="/#about" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-green-400">
                            About
                        </HashLink>
                        <HashLink smooth to="/#projects" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-green-400">
                            Projects
                        </HashLink>
                        <HashLink smooth to="/#contact" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-green-400">
                            Contact
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
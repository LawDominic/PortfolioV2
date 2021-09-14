import React, { useState, useEffect } from 'react';

function Nav() {

    const mobileMenuHandler = (event) => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
    
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    return (
        <div>
            <div class="container mt-2 mx-5 py-3">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between items-center">

                        {/* Mobile menu button */}
                        <div class="flex md:hidden">
                            <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div class="hidden -mx-4 md:flex md:items-center mt-8">
                        <a href="#" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-blue-600">Home</a>
                        <a href="#" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-blue-600">About</a>
                        <a href="#" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-blue-600">Projects</a>
                        <a href="#" class="block mx-4 mt-2 md:mt-0 text-l text-gray-50 capitalize hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
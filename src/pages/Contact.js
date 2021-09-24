import React from 'react';
import FeatherIcon from 'feather-icons-react';

function Contact() {
    return (
        <section class="py-10">
            <h1 className="text-2xl font-bold py-10">Get in touch!</h1>
            <p>
            If you would like to get in touch with me, I am available here!
            <br/><br/>
            <div class="flex items-center justify-center mx-auto space-x-4">
                <div class="overflow-hidden shadow-lg rounded-lg w-50 md:w-50 cursor-pointer p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:text-green-400">
                    <a href="mailto:contact@domlaw.me" target="_blank" class="flex space-x-1">
                        <FeatherIcon icon="mail" />
                    </a>
                </div>
                <div class="overflow-hidden shadow-lg rounded-lg w-50 cursor-pointer m-10 p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:text-green-400">
                    <a href="https://github.com/LawDominic" target="_blank" class="flex space-x-1">
                        <FeatherIcon icon="github" />
                        <div class="w-full hidden md:block">
                            <p class="text-gray-800 dark:text-white font-medium">
                            LawDominic
                            </p>
                        </div>
                    </a>
                </div>
                <div class="overflow-hidden shadow-lg rounded-lg w-50 cursor-pointer m-10 p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:text-green-400">
                    <a href="https://www.linkedin.com/in/lawdominic/" target="_blank" class="flex space-x-1">
                        <FeatherIcon icon="linkedin" />
                        <div class="w-full hidden md:block">
                            <p class="text-gray-800 dark:text-white font-medium">
                            LawDominic
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            </p>
        </section>
    )
}

export default Contact;
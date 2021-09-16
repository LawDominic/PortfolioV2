import travelfunIcon from "../images/portfolio/travelfun.png";
import placeholderImg from "../images/portfolio/placeholder.jpg";

function Projects() {
    return (
        <section class="py-10">
            <h1 className="text-2xl font-bold py-10">Projects</h1>
            <div class="flex items-center justify-center mx-auto">
                <div class="overflow-hidden shadow-lg rounded-lg w-80 md:w-80 cursor-pointer m-10 p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
                    <a href="https://github.com/LawDominic/TravelFun" target="_blank" class="w-full block h-full">
                        <img src={`${travelfunIcon}`} class="max-h-60 w-full object-cover"/>
                        <div class="w-full">
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                TravelFun
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 font-light text-md">
                                A concept mobile app for tourists - providing information for places to stay and eat.
                            </p>
                            <div class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-gray-900 rounded-2xl">
                                    Expo
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-800 bg-green-400 rounded-2xl">
                                    React Native
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="overflow-hidden shadow-lg rounded-lg w-80 md:w-80 cursor-pointer m-10 p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-5 hover:shadow-2xl mx-0">
                    <a href="https://github.com/LawDominic/ASXCrypto" target="_blank" class="w-full block h-full">
                        <img src={`${placeholderImg}`} class="max-h-60 w-full object-cover"/>
                        <div class="w-full">
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                ASXCrypto
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 font-light text-md">
                                ASX + Cryptocurrency portfolio tracker using ASX and Coingecko APIs. Still in the works.
                            </p>
                            <div class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-gray-900 rounded-2xl">
                                    Express
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-green-600 rounded-2xl">
                                    Mongoose
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-yellow-500 rounded-2xl">
                                    Handlebars
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="overflow-hidden shadow-lg rounded-lg w-80 md:w-80 cursor-pointer m-10 p-4 bg-gray-50 transition duration-200 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
                    <a href="https://github.com/LawDominic" target="_blank" class="w-full block h-full">
                        <img src={`${placeholderImg}`} class="max-h-60 w-full object-cover"/>
                        <div class="w-full">
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                PoemShare
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 font-light text-md">
                                A simple web application allowing users to submit their poems and upvote poems based on their preference.
                            </p>
                            <div class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-800 bg-green-400 rounded-2xl">
                                    React.js
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-gray-900 rounded-2xl">
                                    Express
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 text-gray-100 bg-indigo-700 rounded-2xl">
                                    Axios
                                </div>
                                <div class="text-xs mr-2 py-1.5 px-3 mt-3 text-gray-100 bg-green-500 rounded-2xl">
                                    Tailwind CSS
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
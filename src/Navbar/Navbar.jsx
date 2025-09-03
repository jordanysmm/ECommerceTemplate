import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faBars,faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white">
                        <span class="text-blue-600">Code</span>Hub
                    </a>
                </div>

                <div class="hidden md:flex items-center space-x-1">
                    <a href="#" class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                    <a href="#projects" class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                    <a href="#categories" class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Categories</a>
                    <a href="#about" class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                    <a href="#contact" class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                </div>

                <div class="flex items-center space-x-4">
                    <button id="theme-toggle" type="button" title="Toggle dark/light mode" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fas fa-sun hidden dark:block text-yellow-300"></i>
                        <FontAwesomeIcon icon={faSun} className='text-gray-700 dark:text-gray-200' />
                    </button>

                    <div class="relative">
                        <input type="text" id="search-input" placeholder="Search projects..."
                            class="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </input>
                        <div id="search-results" class="hidden absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 max-h-96 overflow-y-auto"></div>
                    </div>

                    <button id="mobile-menu-button" type="button" title="Open mobile menu" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FontAwesomeIcon icon={faBars} className='text-gray-700 dark:text-gray-200' />
                    </button>
                </div>
            </div>

            {/* <!-- Mobile menu --> */}
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                <a href="#" class="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                <a href="#projects" class="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="#categories" class="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Categories</a>
                <a href="#about" class="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#contact" class="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a href="#" class="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">Login</a>
                    <a href="#" class="block px-3 py-2 mt-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-gray-700">Register</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
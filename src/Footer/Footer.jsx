const Footer = ({ title = 'Web Apps', label = '342 projects' }) => {
    return (
        <footer class="bg-gray-800 text-white py-12">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">CodeHub</h3>
                        <p class="text-gray-400">
                            A platform for discovering and sharing open source projects with developers worldwide.
                        </p>
                        <div class="flex space-x-4 mt-4">
                            <a href="#" class="text-gray-400 hover:text-white" title="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white" title="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white" title="Discord">
                                <i class="fab fa-discord"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white" title="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Explore</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Popular Projects</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">New Releases</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Trending</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Collections</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Community</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Guidelines</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Contributors</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Forums</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Company</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; 2023 CodeHub. All rights reserved.
                    </p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
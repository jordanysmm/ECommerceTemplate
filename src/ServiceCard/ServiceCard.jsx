const ServiceCard = ({ title = 'Web Apps', label = '342 projects' }) => {
    return (
        <a href="#" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-globe text-blue-600 dark:text-blue-400 text-2xl"></i>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{label}</p>
        </a>
    )
}

export default ServiceCard;


const Section = ({ children, tile = 'Featured Projects' }) => {
    return (
        <section id="projects" class="py-16 bg-gray-50 dark:bg-gray-900">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">{tile}</h2>
                {children}
            </div>

        </section>
    )
}

export default Section;


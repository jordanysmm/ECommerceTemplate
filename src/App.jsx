import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Navbar/Navbar'
import Section from './Section/Section'
import ProductCard from './ProductCard/ProductCard'
import ServiceCard from './ServiceCard/ServiceCard'
import Footer from './Footer/Footer'

function App() {

  return (
    <div class="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header class="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <Navbar />
      </header>

      {/* <!-- Hero Section --> */}
      <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Discover & Share Open Source Projects</h1>
          <p class="text-xl md:text-2xl mb-8">Find, contribute to, or download high-quality open source software for your next project.</p>
          <div class="flex flex-col md:flex-row justify-center gap-4">
            <a href="#projects" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Browse Projects</a>
            <a href="#" class="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Submit Project</a>
          </div>
        </div>
      </section>

      <Section tile='Servicios'>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </Section>      

      <Section tile='Productos'>
        {/* <!-- Filter/Sort Controls --> */}
        <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div class="flex items-center space-x-4">
            <button id="filter-button" class="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
              <i class="fas fa-filter"></i>
              <span>Filters</span>
            </button>

            <div id="filter-dropdown" class="hidden absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 w-64">
              <div class="mb-4">
                <h3 class="font-semibold mb-2 dark:text-white">Category</h3>
                <select title="Filter by category" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option>All Categories</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>Library</option>
                  <option>Utility</option>
                </select>
              </div>
              <div class="mb-4">
                <h3 class="font-semibold mb-2 dark:text-white">Language</h3>
                <select title="Filter by language" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option>All Languages</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
              </div>
              <div>
                <h3 class="font-semibold mb-2 dark:text-white">Difficulty</h3>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="dark:text-white">Beginner</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="dark:text-white">Intermediate</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="dark:text-white">Advanced</span>
                  </label>
                </div>
              </div>
              <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Apply Filters</button>
            </div>

            <div class="flex items-center space-x-2">
              <span class="dark:text-white">Sort by:</span>
              <select class="bg-white dark:bg-gray-800 dark:text-white p-2 rounded border" title="Sort projects">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Recently Updated</option>
                <option>Most Stars</option>
              </select>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span class="dark:text-white">View:</span>
            <button type="button" title="Grid View" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <i class="fas fa-th-large"></i>
            </button>
            <button type="button" title="List View" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <i class="fas fa-list"></i>
            </button>
          </div>
        </div>

        {/* <!-- Project Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div class="mt-12 text-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Mas productos
          </button>
        </div>

      </Section>



      <Section tile='Contact Us'>
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Have questions about our platform or want to submit a project? Fill out the form and we'll get back to you as soon as possible.
              </p>

              <form id="contact-form">
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name*</label>
                  <input type="text" id="name" required class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email*</label>
                  <input type="email" id="email" required class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div class="mb-4">
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input type="text" id="subject" class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message*</label>
                  <textarea id="message" rows="4" required class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div class="md:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                You can also reach us through our social media channels or visit our office during business hours.
              </p>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1 text-blue-500">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <p class="ml-3 text-gray-600 dark:text-gray-300">
                    <span class="font-semibold text-gray-800 dark:text-white">Address:</span> 123 Open Source Street, San Francisco, CA 94107
                  </p>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1 text-blue-500">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <p class="ml-3 text-gray-600 dark:text-gray-300">
                    <span class="font-semibold text-gray-800 dark:text-white">Phone:</span> (123) 456-7890
                  </p>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1 text-blue-500">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <p class="ml-3 text-gray-600 dark:text-gray-300">
                    <span class="font-semibold text-gray-800 dark:text-white">Email:</span> contact@codehub.example.com
                  </p>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1 text-blue-500">
                    <i class="fas fa-clock"></i>
                  </div>
                  <p class="ml-3 text-gray-600 dark:text-gray-300">
                    <span class="font-semibold text-gray-800 dark:text-white">Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM PST
                  </p>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="font-semibold text-gray-800 dark:text-white mb-3">Follow Us</h4>
                <div class="flex space-x-4">
                  <a href="#" title="Twitter" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-600">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#" title="Facebook" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-blue-800 hover:bg-blue-100 dark:hover:bg-gray-600">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="#" title="Instagram" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-pink-600 hover:bg-pink-100 dark:hover:bg-gray-600">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#" title="GitHub" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <i class="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="#" title="YouTube" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-red-600 hover:bg-red-100 dark:hover:bg-gray-600">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer></Footer>

    </div>
  )
}

export default App

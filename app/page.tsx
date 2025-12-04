export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to MyWebsite
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover amazing content and explore our beautiful, modern website built with Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built with Next.js for optimal speed and performance.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Modern aesthetics with smooth animations and gradients.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-pink-950 dark:to-indigo-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Responsive</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Perfectly optimized for all devices and screen sizes.
          </p>
        </div>
      </div>
    </div>
  );
}

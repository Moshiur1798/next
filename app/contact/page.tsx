export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
                    We'd love to hear from you! Get in touch with us today.
                </p>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl p-8 shadow-xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                placeholder="Tell us what's on your mind..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <div className="text-3xl mb-2">📧</div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">hello@mywebsite.com</p>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl mb-2">📱</div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl mb-2">📍</div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

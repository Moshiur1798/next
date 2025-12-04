export default function About() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    About Us
                </h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        We are passionate about creating beautiful, modern web experiences that delight users and drive results.
                    </p>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl p-8 my-8 shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            To deliver exceptional digital experiences through innovative design and cutting-edge technology.
                            We believe in the power of great design to transform businesses and engage audiences.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-8 my-8 shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">✨</span>
                                <span><strong>Excellence:</strong> We strive for perfection in everything we create</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">🤝</span>
                                <span><strong>Collaboration:</strong> Working together to achieve amazing results</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">🚀</span>
                                <span><strong>Innovation:</strong> Always pushing boundaries and exploring new possibilities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

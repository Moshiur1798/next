'use client';

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogContent() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Get unique categories
    const categories = Array.from(new Set(blogs.map(blog => blog.category)));

    // Filter blogs based on selected category
    const filteredBlogs = selectedCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <>
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 ${selectedCategory === "All"
                            ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600"
                        }`}
                >
                    All Posts
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl"
                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blog Grid Section */}
            <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Results count */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing <span className="font-bold text-purple-600">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
                            {selectedCategory !== "All" && (
                                <span> in <span className="font-bold text-purple-600">{selectedCategory}</span></span>
                            )}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-20">
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Never Miss an Update
                                </h2>
                                <p className="text-white/90 text-lg mb-8">
                                    Subscribe to our newsletter and get the latest articles delivered to your inbox
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                                    />
                                    <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

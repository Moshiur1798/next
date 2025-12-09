import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog - MyWebsite",
    description: "Explore our latest articles, tutorials, and insights on web development, design, and technology trends.",
    keywords: [
        "blog",
        "web development",
        "tutorials",
        "technology",
        "programming",
        "design",
        "insights",
        "articles"
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://mywebsite.com/blog",
        title: "Blog - MyWebsite",
        description: "Explore our latest articles, tutorials, and insights on web development, design, and technology trends.",
        siteName: "MyWebsite",
    },
};

export default function BlogPage() {
    // Get unique categories
    const categories = Array.from(new Set(blogs.map(blog => blog.category)));

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                        <Link href="/" className="hover:text-purple-600 transition-colors">
                            Home
                        </Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-900 dark:text-white font-semibold">Blog</span>
                    </div>

                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                            OUR BLOG
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-6">
                            Insights, tutorials, and industry trends to help you stay ahead in the world of web development
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                            All Posts
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Grid Section */}
            <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogs.map((blog) => (
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
        </div>
    );
}

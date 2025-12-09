import type { Metadata } from "next";
import BlogContent from "@/components/BlogContent";
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

                    {/* Blog Content with Filters */}
                    <BlogContent />
                </div>
            </div>
        </div>
    );
}

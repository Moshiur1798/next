import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        return {
            title: "Blog Not Found - MyWebsite",
        };
    }

    return {
        title: `${blog.title} - MyWebsite Blog`,
        description: blog.excerpt,
        keywords: blog.tags,
        authors: [{ name: blog.author.name }],
        openGraph: {
            type: "article",
            locale: "en_US",
            url: `https://mywebsite.com/blog/${blog.slug}`,
            title: blog.title,
            description: blog.excerpt,
            siteName: "MyWebsite",
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 600,
                    alt: blog.title,
                },
            ],
            publishedTime: blog.date,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image],
        },
    };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    // Get related blogs (same category, excluding current)
    const relatedBlogs = blogs
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);

    // Format date
    const formattedDate = new Date(blog.date).toLocaleDateString("en_US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen">
            {/* Hero Section with Featured Image */}
            <div className="relative h-[60vh] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Breadcrumb */}
                <div className="absolute top-8 left-0 right-0 z-20">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center gap-2 text-sm text-white/80">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <Link href="/blog" className="hover:text-white transition-colors">
                                Blog
                            </Link>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-white font-semibold">{blog.title}</span>
                        </div>
                    </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-10 pb-12">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                                    {blog.category}
                                </span>
                                <span className="text-white/80 text-sm">{formattedDate}</span>
                                <span className="text-white/80 text-sm">•</span>
                                <span className="text-white/80 text-sm">{blog.readTime}</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>
                            <p className="text-xl text-white/90 mb-8">
                                {blog.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Author Info */}
                        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
                                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white dark:ring-gray-900">
                                    <Image
                                        src={blog.author.image}
                                        alt={blog.author.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-lg text-gray-900 dark:text-white">
                                    {blog.author.name}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {blog.author.role}
                                </p>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                {blog.content}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share Section */}
                        <div className="mt-12 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Share this article
                            </h3>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                                    Twitter
                                </button>
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                                    LinkedIn
                                </button>
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
                <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                                RELATED ARTICLES
                            </h2>
                            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {relatedBlogs.map((relatedBlog) => (
                                <BlogCard key={relatedBlog.slug} blog={relatedBlog} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                View All Blog Posts
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

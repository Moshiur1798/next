import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    const { slug, title, excerpt, author, date, category, readTime, image } = blog;

    // Format date
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="group relative h-full">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col">
                {/* Featured Image */}
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-lg">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formattedDate}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent line-clamp-2">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                        {excerpt}
                    </p>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {author.name}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {author.role}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={`/blog/${slug}`}
                            className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:gap-3 transition-all duration-300"
                        >
                            Read More
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

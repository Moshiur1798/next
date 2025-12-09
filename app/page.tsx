import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { testimonials } from "@/data/testimonials";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "MyWebsite - Modern Web Solutions | Home",
  description: "Discover amazing content and explore our beautiful, modern website built with Next.js and Tailwind CSS. Fast performance, stunning design, and fully responsive.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "modern web design",
    "responsive website",
    "web development",
    "fast performance",
    "beautiful design",
    "premium website",
    "TypeScript"
  ],
  authors: [{ name: "MyWebsite Team" }],
  creator: "MyWebsite",
  publisher: "MyWebsite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mywebsite.com",
    title: "MyWebsite - Modern Web Solutions",
    description: "Discover amazing content and explore our beautiful, modern website built with Next.js and Tailwind CSS.",
    siteName: "MyWebsite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyWebsite - Modern Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyWebsite - Modern Web Solutions",
    description: "Discover amazing content and explore our beautiful, modern website built with Next.js and Tailwind CSS.",
    images: ["/twitter-image.jpg"],
    creator: "@mywebsite",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

const sliderImages = [
  "/slider-1.png",
  "/slider-2.png",
  "/slider-3.png",
];

export default function Home() {
  return (
    <div>
      {/* Hero Image Slider */}
      <ImageSlider images={sliderImages} autoPlayInterval={5000} />

      {/* Feature Cards Section */}
      <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              MYWEBSITE AT A GLANCE
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Discover what makes us the industry leader
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {/* Card 1 - Chairman's Message */}
            <div className="group relative">
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 pb-10 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                {/* Circular Image */}
                <div className="flex justify-center mb-8 -mt-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-3 shadow-2xl ring-4 ring-white dark:ring-gray-900">
                      <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                        <Image
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                          alt="Chairman"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Chairman&apos;s Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    We believe that success is built on trust, innovation, and an unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Excellence since 1979 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 pb-10 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="flex justify-center mb-8 -mt-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-3 shadow-2xl ring-4 ring-white dark:ring-gray-900 flex items-center justify-center">
                      <Image
                        src="/quality-badge.png"
                        alt="Quality Badge"
                        width={180}
                        height={180}
                        className="w-44 h-44 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Excellence since 1979
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    At MyWebsite, quality control is key to our sustainability and growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Exporting to 35 Countries */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 pb-10 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="flex justify-center mb-8 -mt-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-3 shadow-2xl ring-4 ring-white dark:ring-gray-900">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/logistics.png"
                          alt="Global Logistics"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Exporting to 35 Countries
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    MyWebsite PLC is a premier global service provider with worldwide reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Largest Service Provider */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 pb-10 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="flex justify-center mb-8 -mt-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-3 shadow-2xl ring-4 ring-white dark:ring-gray-900">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
                          alt="Technology Services"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Largest Service Provider
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    MyWebsite PLC is the largest service provider, offering a diverse range of solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Testimonials
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              LATEST FROM OUR BLOG
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Insights, tutorials, and industry trends to keep you informed
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
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
    </div>
  );
}

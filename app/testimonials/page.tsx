import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Client Testimonials - MyWebsite",
    description: "Read what our satisfied clients have to say about working with MyWebsite. Discover why businesses trust us for their web solutions.",
    keywords: [
        "testimonials",
        "client reviews",
        "customer feedback",
        "success stories",
        "client satisfaction",
        "MyWebsite reviews"
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://mywebsite.com/testimonials",
        title: "Client Testimonials - MyWebsite",
        description: "Read what our satisfied clients have to say about working with MyWebsite.",
        siteName: "MyWebsite",
    },
};

export default function TestimonialsPage() {
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
                        <span className="text-gray-900 dark:text-white font-semibold">Testimonials</span>
                    </div>

                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                            CLIENT TESTIMONIALS
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-6">
                            Don&apos;t just take our word for it - hear from our satisfied clients about their experience working with MyWebsite
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid Section */}
            <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to Join Our Success Stories?
                            </h2>
                            <p className="text-white/90 text-lg mb-8">
                                Let&apos;s work together to create something amazing
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Get Started Today
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

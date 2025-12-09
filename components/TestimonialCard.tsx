import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const { name, role, company, image, rating, text } = testimonial;

    return (
        <div className="group relative h-full">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 ${index < rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow italic">
                    &quot;{text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white dark:ring-gray-900">
                            <Image
                                src={image}
                                alt={name}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {role} at {company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

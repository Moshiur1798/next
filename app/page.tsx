import type { Metadata } from "next";
import ImageSlider from "@/components/ImageSlider";

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
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Next.js for optimal speed and performance.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modern aesthetics with smooth animations and gradients.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-pink-950 dark:to-indigo-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Responsive</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Perfectly optimized for all devices and screen sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

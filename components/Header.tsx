import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            MyWebsite
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-pink-200 transition-colors duration-300 font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

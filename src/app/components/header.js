// Import Link from Next.js for navigation
import Link from 'next/link';

// Use client directive for Next.js
export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#">My Portfolio</a>
        </h1>
        <div className="space-x-6 hidden md:flex">
          <Link href="#footer"><span className="hover:text-gray-400">Home</span></Link>
          <Link href="#about"><span className="hover:text-gray-400">About</span></Link>
          <Link href="#projects"><span className="hover:text-gray-400">Projects</span></Link>
          <Link href="#skills"><span className="hover:text-gray-400">Skills</span></Link>
          <Link href="#contact"><span className="hover:text-gray-400">Contact</span></Link>
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className="hidden">
        
      <div className="space-x-6 hidden md:flex">
          <Link href="#footer"><span className="hover:text-gray-400">Home</span></Link>
          <Link href="#about"><span className="hover:text-gray-400">About</span></Link>
          <Link href="#projects"><span className="hover:text-gray-400">Projects</span></Link>
          <Link href="#skills"><span className="hover:text-gray-400">Skills</span></Link>
          <Link href="#contact"><span className="hover:text-gray-400">Contact</span></Link>
        </div>
      </div>
    </header>
  );
}

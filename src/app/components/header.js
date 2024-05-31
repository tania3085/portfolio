import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#">My Portfolio</a>
        </h1>
        <div className="space-x-6">
          <Link href="#footer"><span className="hover:text-gray-400">Home</span></Link>
          <Link href="#about"><span className="hover:text-gray-400">About</span></Link>
          <Link href="#projects"><span className="hover:text-gray-400">Projects</span></Link>
          <Link href="#skills"><span className="hover:text-gray-400">Skills</span></Link>
          <Link href="#contact"><span className="hover:text-gray-400">Contact</span></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

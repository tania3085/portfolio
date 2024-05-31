import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt , FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10" id='footer'>
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Links */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Follow Me</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://twitter.com" className="text-blue-500 hover:text-blue-400 transition">
              <FaTwitter size="2em" />
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-600 transition">
              <FaLinkedin size="2em" />
            </a>
            <a href="https://github.com" className="text-gray-500 hover:text-gray-400 transition">
              <FaGithub size="2em" />
            </a>
            <a href="mailto:email@example.com" className="text-red-500 hover:text-red-400 transition">
              <FaEnvelope size="2em" />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#hero"><span className="hover:text-gray-400 transition">Home</span></Link>
            </li>
            <li>
              <Link href="#about"><span className="hover:text-gray-400 transition">About</span></Link>
            </li>
            <li>
              <Link href="#projects"><span className="hover:text-gray-400 transition">Projects</span></Link>
            </li>
            <li>
              <Link href="#skills"><span className="hover:text-gray-400 transition">Skills</span></Link>
            </li>
            <li>
              <Link href="#contact"><span className="hover:text-gray-400 transition">Contact</span></Link>
            </li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Contact Info</h4>
          <p className="mb-2"><FaEnvelope className="inline-block mr-2" /> tc73405@gmail.com</p>
          <p className="mb-2"><FaPhoneAlt className="inline-block mr-2" /> 9501551355</p>
          <p><FaMapMarkerAlt className="inline-block mr-2" /> Ghee Mandi Amritsar ,Punjab</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
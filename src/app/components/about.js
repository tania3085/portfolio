import { FaUser, FaBriefcase, FaCode } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-lg mb-4 text-gray-700">
            I am a dedicated web developer with a strong background in front-end technologies. I enjoy creating seamless and engaging user experiences. I have worked on various projects, from small business websites to large-scale web applications.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Outside of work, I love to explore new technologies, read tech blogs, and contribute to open-source projects. I am always eager to learn and grow as a developer.
          </p>
          <div className="flex flex-col space-y-4 mt-8">
            <div className="flex items-center">
              <FaUser className="text-blue-500 mr-2" />
              <span className="text-lg text-gray-800">Passionate Developer</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="text-blue-500 mr-2" />
              <span className="text-lg text-gray-800">3+ Years of Experience</span>
            </div>
            <div className="flex items-center">
              <FaCode className="text-blue-500 mr-2" />
              <span className="text-lg text-gray-800">Full-Stack Skills</span>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/img/taniaa.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;

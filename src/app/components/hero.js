import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg mb-8">
            I'm a web developer passionate about building exceptional digital experiences.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110 inline-block"
          >
            Get In Touch
          </a>
        </div>
        <div className="w-full md:w-1/2 rounded-full flex justify-center md:justify-start">
          <Image
            src="/img/tania.jpeg"
            alt="hero"
            width={200}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

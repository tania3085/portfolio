import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="mb-8">I'd love to hear from you! Please fill out the form below to get in touch or use the contact details provided.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-left mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-left mb-2">Message</label>
                <textarea id="message" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaPhoneAlt className="text-blue-500 inline-block mr-2" />
              <span className="text-lg text-gray-200">9501551355</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaEnvelope className="text-blue-500 inline-block mr-2" />
              <span className="text-lg text-gray-200">tc73405@gmail.com</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-blue-500 inline-block mr-2" />
              <span className="text-lg text-gray-200">Ghee Mandi Amritsar ,Punjab </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54352.140111053974!2d74.82892073851383!3d31.633610614703702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1717148415350!5m2!1sen!2sus"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

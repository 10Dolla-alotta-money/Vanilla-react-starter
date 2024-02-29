import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex items-center mb-4">
          <h1 className="text-xl font-bold">LOGO</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full border-t border-blue-gray-50 py-6 px-4 md:px-12">
      <Typography
        color="blueGray"
        className="font-normal text-center md:text-left"
      >
        &copy; LOGO
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link to="/about">
            {' '}
            {/* Corrected Link usage */}
            <Typography
              as="a"
              href="#"
              color="blueGray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </Link>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blueGray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

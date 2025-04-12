import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white shadow-xl py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-8">
        
        {/* Logo avec image */}
        <div className="flex items-center space-x-3">
          <img src="images/logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
          <Link to="/" className="font-bold text-3xl text-yellow-500 hover:text-white">
            Marouane Fellahi
          </Link>
        </div>

        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <Link to="/" className="text-yellow-500 hover:text-white transition-all duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-yellow-500 hover:text-white transition-all duration-300">About Me</Link>
          </li>
          <li>
            <Link to="/education" className="text-yellow-500 hover:text-white transition-all duration-300">Education</Link>
          </li>
          <li>
            <Link to="/skills-and-projects" className="text-yellow-500 hover:text-white transition-all duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-yellow-500 hover:text-white transition-all duration-300">Contact</Link>
          </li>
        </ul>

        {/* Burger menu (for mobile view) */}
        <div className="lg:hidden flex items-center">
          <button className="text-white hover:text-yellow-500 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden bg-black text-white">
        <ul className="px-8 py-4 space-y-4">
          <li>
            <Link to="/" className="block py-2 text-yellow-500 hover:text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 text-yellow-500 hover:text-white">About Me</Link>
          </li>
          <li>
            <Link to="/education" className="block py-2 text-yellow-500 hover:text-white">Education</Link>
          </li>
          <li>
            <Link to="/skills-and-projects" className="block py-2 text-yellow-500 hover:text-white">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 text-yellow-500 hover:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

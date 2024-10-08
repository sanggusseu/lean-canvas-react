import { useState } from 'react';
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="sticky top-0 bg-gray-800 text-white px-4 z-30">
      <div className="container mx-auto flex justify-between items-center h-14">
        <h1>
          <Link to="/" className="text-xl font-bold">
            Lean Canvas
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:to-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button onClick={toggleMenu} type="button" className="md:hidden">
          <FaBars />
        </button>

        <Button className="hidden md:block">짐코딩 강의</Button>
      </div>

      {/* Mobile Menu */}
      <aside
        className={`md:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out`}
      >
        <header className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </header>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:to-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-400 tracking-wide"
        >
          {"<Jitu />"}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link to="/skills" className="hover:text-purple-400 transition">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-purple-400 transition">
            Projects
          </Link>
          <Link to="/certificates" className="hover:text-purple-400 transition">
            Certificates
          </Link>
          <Link to="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-purple-900/30">
          <div className="flex flex-col items-center py-4 space-y-4 text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
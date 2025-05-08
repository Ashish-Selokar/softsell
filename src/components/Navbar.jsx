"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
